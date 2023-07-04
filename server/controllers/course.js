import AWS from 'aws-sdk'; // de sters\
import {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

import slugify from 'slugify';
import { readFileSync } from 'fs';
import User from '../models/user';
import Lesson from '../models/lesson'
import Module from '../models/modules';
import { removeFromBucket } from './courseUploads';

const stripe = require('stripe')(process.env.STRIPE_SECRET);

import Course from '../models/course';

import { nanoid } from 'nanoid';

import { awsConfig } from '../awsConfig/awsConfig';
const S3 = new AWS.S3(awsConfig); // de sters pt ca mergem pe sdk v3

const client = new S3Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});

// helper functions
const deleteVideo = (Bucket, Key) => {
  try {
    const params = {
      Bucket,
      Key,
    };

    // upload to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log('video Deleted => ', data);
    });
  } catch (err) {
    console.log(err);
  }
};

/// Helper functions END //

export const uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    console.log(req.body);
    if (!image) {
      return res.status(400).send('No Image');
    }
    const base64Data = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );

    const type = image.split(';')[0].split('/')[1];

    // image params
    const params = {
      Bucket: 'marwebelearning',
      Key: `${nanoid()}.${type}`,
      Body: base64Data,
      ACL: 'private',
      ContentEncoding: 'base64',
      ContentType: `image/${type}`,
    };

    // upload to s3 v2
    //  S3.upload(params, (err, data) => {
    //    if (err) {
    //      console.log(err);
    //      return res.sendStatus(400);
    //    }
    //    console.log(data);
    //    res.send(data);
    //  });
    // Upload to S3 v3
    const putComand = new PutObjectCommand({...params});
    
    try {
      const response = await client.send(putComand, (err, data) => {
        if (err){
           console.log(err);
           return res.sendStatus(400);
        }

       if(data.$metadata.httpStatusCode == 200){
      
        res.send({ Bucket: params.Bucket, Key: params.Key });
       }
        
        
      });
          } catch (err) {
      console.error(err);
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const removeImage = async (req, res) => {
  try {
    const { image } = req.body;
    // image params
    const params = {
      Bucket: image.Bucket,
      Key: image.Key,
    };

    // send remove request to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      res.send({ ok: true });
    });
  } catch (err) {
    console.log(err);
  }
};

export const create = async (req, res) => {
  // console.log("CREATE COURSE", req.body);
  // return;
  try {
    const alreadyExist = await Course.findOne({
      slug: slugify(req.body.name.toLowerCase()),
    });
    if (alreadyExist) return res.status(400).send('Title is taken');

    const course = await new Course({
      slug: slugify(req.body.name),
      instructor: req.auth._id,
      ...req.body,
    }).save();

    res.json(course);
  } catch (err) {
    console.log(err);
    return res.status(400).send('Course create failed. Try again.');
  }
};

export const read = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug })
      .populate('instructor', '_id nume')
      .populate('modules') // Populează câmpul 'modules'
      .populate({
        path: 'modules',
        populate: {
          path: 'lessons',
        },
      })
      // .populate('lessons') // Populează câmpul 'lessons'
      .exec();
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};

export const uploadVideo = async (req, res) => {
  try {
    // console.log("req.auth._id", req.auth._id);
    // console.log("req.params.instructorId", req.params.instructorId);
    if (req.auth._id != req.params.instructorId) {
      return res.status(400).send('Unauthorized');
    }

    const { video } = req.files;
    // console.log(video);
    if (!video) return res.status(400).send('No video');

    // video params
    const params = {
      Bucket: 'marwebelearning',
      Key: `${nanoid()}.${video.type.split('/')[1]}`,
      Body: readFileSync(video.path),
      ACL: 'public-read',
      ContentType: video.type,
    };

    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeVideo = async (req, res) => {
  try {
    if (req.auth._id != req.params.instructorId) {
      return res.status(400).send('Unauthorized');
    }

    const { Bucket, Key } = req.body;
    // console.log("VIDEO REMOVE =====> ", req.body);

    deleteVideo(Bucket, Key);
    res.send({ ok: true });
    // video params
    // const params = {
    //   Bucket,
    //   Key,
    // };

    // // upload to s3
    // S3.deleteObject(params, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     res.sendStatus(400);
    //   }
    //   console.log(data);
    //   res.send({ ok: true });
    // });
  } catch (err) {
    console.log(err);
  }
};

export const addLesson = async (req, res) => {
  try {
    const { slug, instructorId } = req.params;
    const { title, content, video } = req.body;

    if (req.auth._id != instructorId) {
      return res.status(400).send('Unauthorized');
    }

    const updated = await Course.findOneAndUpdate(
      { slug },
      {
        $push: { lessons: { title, content, video, slug: slugify(title) } },
      },
      { new: true }
    )
      .populate('instructor', '_id name')
      .exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send('Add lesson failed');
  }
};

export const update = async (req, res) => {
  try {
    
    const { slug } = req.params;
    console.log("IMAGE receved in body",req.body.image);
    const course = await Course.findOne({ slug }).exec();
    console.log('COURSE FOUND => ', course);
    if (req.auth._id != course.instructor) {
      return res.status(400).send('Unauthorized');
    }

    const updated = await Course.findOneAndUpdate({ slug }, req.body, {
      new: true,
    }).exec();
    console.log('UPDATED COURSE ', updated);
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug })
      .populate('modules')
      .populate({
        path: 'modules',
        populate: {
          path: 'lessons',
        },
      });

    if (course.modules && course.modules.length >= 1) {
      for (const module of course.modules) {
        if (module.lessons && module.lessons.length >= 1) {
          for (const lesson of module.lessons) {
            if (lesson.video && lesson.video.Key) {
              await removeFromBucket(lesson.video.Key);
            }

            await Lesson.findByIdAndDelete(lesson._id);
            console.log('Removed lesson:', lesson);
          }
        }
        await Module.findByIdAndDelete(module._id);
        console.log('Removed module:', module);
      }
    }

     if (course.image && course.image.Key) {
       await removeFromBucket(course.image.Key);
     }
    await course.remove();

    res.status(200).json({ message: 'Cursul a fost șters cu succes.' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'A apărut o eroare la ștergerea cursului.' });
  }
};

export const removeLesson = async (req, res) => {
  const { slug, lessonId } = req.params;
  const course = await Course.findOne({ slug }).exec();
  if (req.auth._id != course.instructor) {
    return res.status(400).send('Unauthorized');
  }

  const deletedLesson = await Course.findByIdAndUpdate(course._id, {
    $pull: { lessons: { _id: lessonId } },
  }).exec();

  res.json({ ok: true });
};

export const updateLesson = async (req, res) => {
  try {
    // console.log("UPDATE LESSON", req.body);
    const { slug } = req.params;
    const { _id, title, content, video, free_preview } = req.body;
    const course = await Course.findOne({ slug }).select('instructor').exec();

    if (course.instructor._id != req.auth._id) {
      return res.status(400).send('Unauthorized');
    }
    // Daca exista un video in acea lectie inainte de a face update stergem acel video
    if (video) {
      const previousCourse = await Course.findOne({ 'lessons._id': _id });
      const lesson = previousCourse.lessons.find((lesson) =>
        lesson._id.equals(_id)
      );

      const { Bucket, Key } = lesson.video;
      deleteVideo(Bucket, Key);
      console.log(' Lesson =>  ', lesson);
      lesson.video.location == video.location ? true : false;
      res.json(previousCourse);
      return;
    }
    const updated = await Course.updateOne(
      { 'lessons._id': _id },
      {
        $set: {
          'lessons.$.title': title,
          'lessons.$.content': content,
          'lessons.$.video': video,
          'lessons.$.free_preview': free_preview,
        },
      },
      { new: true }
    ).exec();

    // console.log("updated", updated);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send('Update lesson failed');
  }
};

export const publishCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).select('instructor').exec();

    if (course.instructor._id != req.auth._id) {
      return res.status(400).send('Unauthorized');
    }

    const updated = await Course.findByIdAndUpdate(
      courseId,
      { published: true },
      { new: true }
    ).exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send('Publish course failed');
  }
};

export const unpublishCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).select('instructor').exec();

    if (course.instructor._id != req.auth._id) {
      return res.status(400).send('Unauthorized');
    }

    const updated = await Course.findByIdAndUpdate(
      courseId,
      { published: false },
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send('Unpublish course failed');
  }
};

export const courses = async (req, res) => {
  const all = await Course.find().populate('instructor', '_id name').exec();
  res.json(all);
};
export const publishedCourses = async (req, res) => {
  const all = await Course.find({ published: true })
    .populate('instructor', '_id name')
    .exec();
  return res.json(all);
};

export const checkEnrollment = async (req, res) => {
  const { courseId } = req.params;
  // find courses of the currently logged in user
  const user = await User.findById(req.auth._id).exec();
  // check if course id is found in user courses array
  let ids = [];
  let length = user.courses && user.courses.length;
  for (let i = 0; i < length; i++) {
    ids.push(user.courses[i].toString());
  }
  // return course only if enrollemnt status is true

  
    if(!ids.includes(courseId)){ 
     return res.json({ status: ids.includes(courseId) });
    }
  

  return res.json({
    status: ids.includes(courseId),
    course: await Course.findById(courseId).exec(),
  });
};

export const freeEnrollment = async (req, res) => {
  try {
    // check if course is free or paid
    const course = await Course.findById(req.params.courseId).exec();
    if (course.paid) return;

    const result = await User.findByIdAndUpdate(
      req.auth._id,
      {
        $addToSet: { courses: course._id },
      },
      { new: true }
    ).exec();
    console.log(result);
    res.json({
      message: 'Congratulations! You have successfully enrolled',
      course,
    });
  } catch (err) {
    console.log('free enrollment err', err);
    return res.status(400).send('FREE Enrollment create failed');
  }
};

export const paidEnrollment = async (req, res) => {
  try {
    // check if course is free or paid
    const course = await Course.findById(req.params.courseId)
      .populate('instructor')
      .exec();
    if (!course.paid) return;
    // application fee 30%
    // const fee = (course.price * 30) / 100; payment intent data doar daca avem ul alt instructor si ii retinem comision
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      // payment_method_types: ['card'],
      // purchase details
      line_items: [
        {
          price_data: {
            currency: 'ron',
            product_data: {
              name: course.name,
            },
            unit_amount: Math.round(course.price.toFixed(2) * 100),
          },
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      mode: 'payment',
      invoice_creation: { enabled: true },
      tax_id_collection: {
        enabled: true,
      },
      // aici trebuie sa verific daca instructorul este extern sau din cadrul firmei
      // Daca instructorul este extern vom opri fee-ul platformei si ii vom transfera partea lui
      // charge buyer and transfer remaining balance to seller (after fee)
      // payment_intent_data: {
      //   application_fee_amount: Math.round(fee.toFixed(2) * 100),
      //   transfer_data: {
      //     destination: course.instructor.stripe_account_id,
      //   },
      // },
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_SUCCESS_URL}/${course._id}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log('SESSION ID => ', session);

    await User.findByIdAndUpdate(req.auth._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log('PAID ENROLLMENT ERR', err);
    return res.status(400).send('Enrollment create failed');
  }
};

export const stripeSuccess = async (req, res) => {
  try {
    // find course
    const course = await Course.findById(req.params.courseId).exec();
    // get user from db to get stripe session id
    const user = await User.findById(req.auth._id).exec();
    // if no stripe session return
    if (!user.stripeSession.id) return res.sendStatus(400);
    // retrieve stripe session
    const session = await stripe.checkout.sessions.retrieve(
      user.stripeSession.id
    );
    console.log('STRIPE SUCCESS', session);
    // if session payment status is paid, push course to user's course []
    if (session.payment_status === 'paid') {
      await User.findByIdAndUpdate(user._id, {
        $addToSet: { courses: course._id },
        $set: { stripeSession: {} },
      }).exec();
    }
    res.json({ success: true, course });
  } catch (err) {
    console.log('STRIPE SUCCESS ERR', err);
    res.json({ success: false });
  }
};

export const userCourses = async (req, res) => {
  const user = await User.findById(req.auth._id).exec();
  const courses = await Course.find({ _id: { $in: user.courses } })
    .populate('instructor', '_id name')
    .exec();
  res.json(courses);
};

export const markCompleted = async (req, res) => {
  const { courseId, lessonId } = req.body;
  // console.log(courseId, lessonId);
  // find if user with that course is already created
  const existing = await Completed.findOne({
    user: req.auth._id,
    course: courseId,
  }).exec();

  if (existing) {
    // update
    const updated = await Completed.findOneAndUpdate(
      {
        user: req.auth._id,
        course: courseId,
      },
      {
        $addToSet: { lessons: lessonId },
      }
    ).exec();
    res.json({ ok: true });
  } else {
    // create
    const created = await new Completed({
      user: req.auth._id,
      course: courseId,
      lessons: lessonId,
    }).save();
    res.json({ ok: true });
  }
};

export const listCompleted = async (req, res) => {
  try {
    const list = await Completed.findOne({
      user: req.auth._id,
      course: req.body.courseId,
    }).exec();
    list && res.json(list.lessons);
  } catch (err) {
    console.log(err);
  }
};

export const markIncomplete = async (req, res) => {
  try {
    const { courseId, lessonId } = req.body;

    const updated = await Completed.findOneAndUpdate(
      {
        user: req.auth._id,
        course: courseId,
      },
      {
        $pull: { lessons: lessonId },
      }
    ).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

