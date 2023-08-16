require('dotenv/config');
import express from 'express';
import formidable from 'formidable';

import { expressjwt } from 'express-jwt';

import User from '../models/user';
import { config } from '../config/config';
// import Course from '../models/course';

export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
})

export const isInstructor = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id).exec();
    if (!user.role.includes('Instructor')) {
      return res.sendStatus(403);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id).exec();
    if (!user.role.includes('Admin')) {
      return res.sendStatus(403);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};

export const isEnrolled = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id).exec();
    const course = await Course.findOne({ slug: req.params.slug }).exec();

    // check if course id is found in user courses array
    let ids = [];
    for (let i = 0; i < user.courses.length; i++) {
      ids.push(user.courses[i].toString());
    }

    if (!ids.includes(course._id.toString())) {
      res.sendStatus(403);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};

export const freeEnrollment = async (req, res) => {
  try {
    // check if course is free or paid
    const course = await Course.findById(req.params.courseId).exec();
    if (course.paid) return;

    const result = await User.findByIdAndUpdate(
      req.user._id,
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
    return res.status(400).send('Enrollment create failed');
  }
};

// check if req is comming from the allowed host list
export const checkAllowedHostNames = async (req, res, next) => {
  console.log('Checking HostNames', req.hostname);
  if (!config.allowedHosts.includes(req.hostname)) {
    res.status(505).send('Unauthorised');
  }

  next();
};

export const formidableMiddleware = (req, res, next) => {
   const form = formidable({ maxFileSize: 1 * 1024 * 1024 * 1024});
   form.parse(req, (err, fields, files) => {
     if (err) {
       next(err);
       return;
     }
     req.files = { ...files };
     // Convert fields array to object
     const convertedFields = {};
     for (const key in fields) {
       if (fields.hasOwnProperty(key)) {
         convertedFields[key] = fields[key][0];
       }
     }

     req.fields = convertedFields;

     console.log(req.fields, 'Fields ===> ');
     next();
   });
}

