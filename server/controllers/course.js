

import slugify from 'slugify';
import User from '../models/user';
import Lesson from '../models/lesson'
import Module from '../models/modules';

import { deleteVideo, deleteImage } from '../utils/fileManager';

const stripe = require('stripe')(
  process.env.STRIPE_SECRET
);

import Course from '../models/course';




import CourseProgress from '../models/courseProgress';






export const create = async (req, res) => {

  console.log(process.env.STRIPE_SECRET);
  // console.log("CREATE COURSE", req.body);
  // return;
  try {
    const alreadyExist = await Course.findOne({
      slug: slugify(req.body.name),
    });
    if (alreadyExist) return res.status(400).send('Title is taken');

    const course = await new Course({
      slug: slugify(req.body.name.toLowerCase()),
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
          populate: {
            path: 'video',
          },
        },
      })
      // .populate('lessons') // Populează câmpul 'lessons'
      .exec();
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};





export const update = async (req, res) => {
  try {
    
    const { slug } = req.params;
    console.log("IMAGE receved in body",req.body.image);
    const course = await Course.findOne({ slug }).exec();
    
    if (req.auth._id != course.instructor) {
      return res.status(400).send('Unauthorized');
    }

    const updated = await Course.findOneAndUpdate(
      { slug },
      { ...req.body, slug: slugify(req.body.name.toLowerCase()) },
      {
        new: true,
      }
    ).exec();
    
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
            if (lesson.video && lesson.video._id) {
              await deleteVideo(lesson.video._id);
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
       await deleteImage(course.image.Key);
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
  
    //

    
    // try and find courseProgress
    const course = await Course.findById(courseId);
    const TryGetCourseProgress = async () =>{
      return await CourseProgress.findOne({user: user._id, course: course._id})
    }
    if(await TryGetCourseProgress() === null || undefined ){
      console.log('STATUS is NULL OR UNDEFINED ');
      // return
      // todo refa logica de courseStatus
      const course = await Course.findById(courseId)
        .populate({
          path: 'modules',
          populate: {
            path: 'lessons',
            populate: {
              path: 'video',
            },
          },
        })
        .exec();
      console.log(course)
      const progress = course.modules.forEach((module) =>
        module.lessons.map((lesson) => ({
          lesson: lesson._id,
          finished: false,
        }))
      );
      
      //  const progress = course.lessons.map((lesson) => ({
      //    lesson: lesson._id,
      //    finished: false,
      //  }));
      const status = new CourseProgress({
        user: user._id,
        course: course._id,
        progress,
      });
      status.save()
    }
const status  = await TryGetCourseProgress()
console.log('STATUS',status)
  return res.json({
    status: ids.includes(courseId),
    course: await Course.findById(courseId)
      .populate({
        path: 'modules',
        populate: {
          path: 'lessons',
          populate: {
            path: 'video',
          },
        },
      })
      .exec(),
    status,
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


export const getCoursePublicData = async (req, res) => {
  const { slug } = req.params
  console.log("SLUG ",slug);
  try {
    const course = await Course.findOne({slug})
  const {
    deschisInscrieri,
    dataIncepereCurs,
    dataFinalCurs,
    inscrisiEditiaCurenta,
    locuriDisponibile,
    stopInscrieri,
    price,
    discountedPrice,
  } = course;
     if (stopInscrieri < new Date()) {
       // Setam deschisInscrieri la False
       course.deschisInscrieri = false;

       // Salvam cursul
       await course.save();
     } else {
        course.deschisInscrieri = true;

        // Salvam cursul
        await course.save();
     }
     

 
    res.send({
      deschisInscrieri,
      stopInscrieri,
      dataIncepereCurs,
      dataFinalCurs,
      inscrisiEditiaCurenta,
      locuriDisponibile,
      price,
      discountedPrice,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error})
  }
};


// "deschisInscrieri": true,
//   "stopInscrieri": "2023-08-31T09:59:00.000Z",
//   "dataIncepereCurs": "2023-09-10T00:00:00.000Z",
//   "dataFinalCurs": "2023-09-27T00:00:00.000Z",
//   "inscrisiEditiaCurenta": 0,
//   "locuriDisponibile": 30