import express from 'express';
import {
  updateProgress,
  getProgress,
  checkModuleCompletion,
  addFinishedLesson,
  removeModuleFinished,
  removeLessonFinished,
} from '../controllers/courseStatus';
import { requireSignin } from '../middlewares';


const router = express.Router()



router.put('/:courseId/:userId/toggleLessonFinished', requireSignin, addFinishedLesson, checkModuleCompletion, updateProgress)
router.get('/:courseId/:userId/getProgress', requireSignin, getProgress)

// marcheaza lectiile ca netermintate
router.put(
  '/:courseId/:userId/toggleLessonUnfinished',
  requireSignin,
    removeModuleFinished,
    removeLessonFinished,
);
module.exports = router;

