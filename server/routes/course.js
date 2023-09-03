import express from 'express';
// import formidable from 'express-formidable'
import formidable from 'formidable';

const router = express.Router();

//middleware
import {
  isInstructor,
  requireSignin,
  isEnrolled,
  isAdmin,
  formidableMiddleware,
} from '../middlewares';

import { uploadImage, removeVideoController, uploadVideoController } from '../controllers/fileManager';
//controllers
import {
  create,
  read,
  deleteCourse,
  update,
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
  getCoursePublicData
} from '../controllers/course';
  


router.get('/courses',requireSignin,isAdmin, courses);
router.get('/publishedCourses', publishedCourses);

//images
router.post('/course/upload-image',requireSignin, isInstructor, uploadImage);
router.post('/course/remove-image', requireSignin, isInstructor) // remove image);


//course routes
router.post('/course', requireSignin, isInstructor, create);
router.put('/course/:slug', requireSignin, isInstructor, update);

router.get( '/course/:slug', read)
router.delete('/course/:slug', requireSignin, isAdmin, deleteCourse);

router.post(
  '/course/video-upload/:instructorId/:moduleId',
  requireSignin,
  // formidable(),
  formidableMiddleware,
  uploadVideoController
);



// publish unpublish
router.put(
  '/course/publish/:courseId', 
  requireSignin,
  isInstructor,
  publishCourse
);
router.put('/course/unpublish/:courseId', requireSignin, isInstructor, unpublishCourse);

// `/api/course/lesson/${slug}/${course.instructor._id}`,
// router.post("/course/lesson/:slug/:instructorId", requireSignin,isInstructor, addLesson);
// router.put("/course/lesson/:slug/:instructorId", requireSignin,isInstructor, updateLesson);
// router.put('/course/:slug/:lessonId', requireSignin, isInstructor, removeLesson);




router.get('/check-enrollment/:courseId', requireSignin, checkEnrollment);


// enrollment
router.post("/free-enrollment/:courseId", requireSignin, freeEnrollment);
router.post("/paid-enrollment/:courseId", requireSignin, paidEnrollment);
router.get("/stripe-success/:courseId", requireSignin, stripeSuccess);

router.get("/user-courses", requireSignin, userCourses);
router.get("/user/course/:slug", requireSignin, isEnrolled, read); // Verifica daca cursantul este inrolat in curs si returneaza cursul

// mark completed
// router.post("/mark-completed", requireSignin, markCompleted);
// router.post("/list-completed", requireSignin, listCompleted);
// router.post("/mark-incomplete", requireSignin, markIncomplete);

router.post('/v2/comanda/:slug', (req, res)=>{
  console.log(req.body)
  res.send(req.body);
});
// timeline
router.get('/course-data/:slug', getCoursePublicData)
module.exports = router;
