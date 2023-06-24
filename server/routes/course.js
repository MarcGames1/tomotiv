import express from 'express';
import formidable from 'express-formidable'

const router = express.Router();

//middleware
import {
  isInstructor,
  requireSignin,
  isEnrolled,
  isAdmin,
} from '../middlewares';

import { uploadImage, removeImage } from '../controllers/courseImages';
//controllers
import {
  create,
  read,
  uploadVideo,
  removeVideo,
  addLesson,
  update,
  removeLesson,
  updateLesson,
  publishCourse,
  unpublishCourse,
  courses,
  publishedCourses,
  checkEnrollment,
  freeEnrollment,
  paidEnrollment,
  stripeSuccess,
  userCourses,
  markCompleted,
  listCompleted,
  markIncomplete,
  addLessonInModule,
  updateLessonInModule,
  removeLessonInModule,
} from '../controllers/course';


router.get('/courses',requireSignin,isAdmin, courses);
router.get('/publishedCourses', publishedCourses);

//images
router.post('/course/upload-image',requireSignin, isInstructor, uploadImage);
router.post('/course/remove-image', requireSignin, isInstructor, removeImage);


//course routes
router.post('/course', requireSignin, isInstructor, create);
router.put('/course/:slug', requireSignin, isInstructor, update);

router.get( '/course/:slug',requireSignin, read)

router.post('/course/video-upload/:instructorId',requireSignin, formidable(), uploadVideo);
router.post('/course/video-remove/:instructorId', requireSignin, removeVideo);


// publish unpublish
router.put(
  '/course/publish/:courseId', 
  requireSignin,
  isInstructor,
  publishCourse
);
router.put('/course/unpublish/:courseId', requireSignin, isInstructor, unpublishCourse);

// `/api/course/lesson/${slug}/${course.instructor._id}`,
router.post("/course/lesson/:slug/:instructorId", requireSignin,isInstructor, addLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignin,isInstructor, updateLesson);
router.put('/course/:slug/:lessonId', requireSignin, isInstructor, removeLesson);

// `/api/course/module/${slug}/${course.instructor._id}`,
router.post("/course/:slug/:moduleId/:instructorId", requireSignin,isInstructor, addLessonInModule);
router.put(
  '/course/module/:slug/:instructorId',
  requireSignin,
  isInstructor,
  updateLessonInModule
);
router.put("/module/:slug/:moduleId", requireSignin,isInstructor, removeLessonInModule);

router.get('/check-enrollment/:courseId', requireSignin, checkEnrollment);


// enrollment
router.post("/free-enrollment/:courseId", requireSignin, freeEnrollment);
router.post("/paid-enrollment/:courseId", requireSignin, paidEnrollment);
router.get("/stripe-success/:courseId", requireSignin, stripeSuccess);

router.get("/user-courses", requireSignin, userCourses);
router.get("/user/course/:slug", requireSignin, isEnrolled, read);

// mark completed
router.post("/mark-completed", requireSignin, markCompleted);
router.post("/list-completed", requireSignin, listCompleted);
router.post("/mark-incomplete", requireSignin, markIncomplete);

module.exports = router;
