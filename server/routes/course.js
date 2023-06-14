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

//controllers
import {
  uploadImage,
  removeImage,
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
  addModule,
  updateModule,
  removeModule,
} from '../controllers/course';


router.get('/courses',requireSignin,isAdmin, courses);
router.get('/publishedCourses', publishedCourses);

//images
router.post('/course/upload-image', uploadImage);
router.post('/course/remove-image', removeImage);


//course routes
router.post('/course', requireSignin, isInstructor, create);
router.put('/course/:slug', requireSignin, update);

router.get( '/course/:slug', read)

router.post('/course/video-upload/:instructorId',requireSignin, formidable(), uploadVideo);
router.post('/course/video-remove/:instructorId', requireSignin, removeVideo);


// publish unpublish
router.put('/course/publish/:courseId', requireSignin, publishCourse);
router.put('/course/unpublish/:courseId', requireSignin, unpublishCourse);

// `/api/course/lesson/${slug}/${course.instructor._id}`,
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignin, updateLesson);
router.put("/course/:slug/:lessonId", requireSignin, removeLesson);

// `/api/course/module/${slug}/${course.instructor._id}`,
router.post("/course/module/:slug/:instructorId", requireSignin, addModule);
router.put("/course/module/:slug/:instructorId", requireSignin, updateModule);
router.put("/module/:slug/:moduleId", requireSignin, removeModule);

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
