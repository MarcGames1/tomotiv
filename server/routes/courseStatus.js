import express from 'express';
import {
  toggleLessonFinished,
  toggleLessonUnfinished,
  getProgress,
} from '../controllers/courseStatus';
import { requireSignin } from '../middlewares';


const router = express.Router()



router.put('/:courseId/:userId/toggleLessonFinished', requireSignin, toggleLessonFinished)
router.put(
  '/:courseId/:userId/toggleLessonUnfinished',
  requireSignin,
  toggleLessonUnfinished
);
router.get('/:courseId/:userId/getProgress', requireSignin, getProgress)




module.exports = router;

