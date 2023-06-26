import  {expressjwt}  from 'express-jwt';

import User from '../models/user';
import { config } from '../config/config';
// import Course from '../models/course';

export const requireSignin = (req, res, next) => {
  expressjwt({
    getToken: (req, res) => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
  })(req, res, (err) => {
    if (err) {
      if (err.name === 'UnauthorizedError') {
        // Tratați eroarea de neautorizare aici
        return res.status(401).json({ error: 'Unauthorized' });
      }
      // Tratați alte erori JWT aici (opțional)
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    // Continuați cu următorul middleware sau rută
    next();
  });
};

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
      message: "Congratulations! You have successfully enrolled",
      course,
    });
  } catch (err) {
    console.log("free enrollment err", err);
    return res.status(400).send("Enrollment create failed");
  }
};


// check if req is comming from the allowed host list
export const checkAllowedHostNames = async (req, res, next)=>{
  console.log("Checking HostNames" , req.hostname)
  if(!config.allowedHosts.includes(req.hostname)){
    res.status(505).send('Unauthorised')
  }

  next()
}