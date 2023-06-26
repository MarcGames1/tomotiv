import express from 'express';
import {
  createLesson,
  updateLesson,
  getLesson,
  getAllLessons,
  deleteLesson,
} from '../controllers/lessons';
import { isInstructor, requireSignin } from '../middlewares';

const router = express.Router();

// Create a lesson within a module
router.post(
  '/:courseSlug/modules/:moduleId/lessons',
  requireSignin,
  isInstructor,
  createLesson
);

// Update a lesson within a module
router.put(
  '/:slug/modules/:moduleId/lessons/:lessonId',
  requireSignin,
  isInstructor,
  updateLesson
);
// Delete a lesson within a module
router.delete(
  '/:slug/:moduleId/lessons/:lessonId',
  requireSignin,
  isInstructor,
  deleteLesson
);

// Read a single lesson within a module
router.get(
  '/:moduleId/lessons/:lessonId',
  requireSignin,
  isInstructor,
  getLesson
);

// Read all lessons within a module
router.get(
  '/:courseId//modules/:moduleId/lessons',
  requireSignin,
  isInstructor,
  getAllLessons
);

module.exports = router;
