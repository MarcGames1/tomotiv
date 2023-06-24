import express from 'express';
import {
  createLesson,
  updateLesson,
  getLesson,
  getAllLessons,
} from '../controllers/lessons';
import { isInstructor, requireSignin } from '../middlewares';

const router = express.Router();

// Create a lesson within a module
router.post(
  '/modules/:moduleId/lessons',
  requireSignin,
  isInstructor,
  createLesson
);

// Update a lesson within a module
router.put(
  '/modules/:moduleId/lessons/:lessonId',
  requireSignin,
  isInstructor,
  updateLesson
);

// Read a single lesson within a module
router.get(
  '/modules/:moduleId/lessons/:lessonId',
  requireSignin,
  isInstructor,
  getLesson
);

// Read all lessons within a module
router.get(
  '/modules/:moduleId/lessons',
  requireSignin,
  isInstructor,
  getAllLessons
);

module.exports = router;
