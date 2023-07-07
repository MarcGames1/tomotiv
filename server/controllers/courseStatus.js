import CourseProgress from "../models/courseProgress"
import Course from "../models/course";
import Module from '../models/modules';
import Lesson from '../models/lesson'

export const toggleLessonFinished = async (req, res) => {
  const {courseId, userId} = req.params; 
  const {lessonId} = req.body
  console.log(lessonId)
try {
  const courseProgress = await CourseProgress.findOne(
    { course: courseId, user: userId}
  );
  console.log('Course Progress Found')
  courseProgress.progress.forEach((item) => {
    if (item.lesson.equals(lessonId)) {
      item.finished = true;
    }
  });

  await courseProgress.save();

  if (!courseProgress) {
    return res
      .status(404)
      .json({ message: 'Trackerul de progres nu a fost găsit.' });
  }

  return res
    .status(200)
    .json(courseProgress);
} catch (error) {
  console.error(error);
  return res
    .status(500)
    .json({ message: 'A apărut o eroare la marcarea lecției ca finalizată.' });
}
}

export const toggleLessonUnfinished = async (req, res) => {
   const { courseId, userId } = req.params;
   const { lessonId } = req.body;
   console.log(lessonId);
   try {
     const courseProgress = await CourseProgress.findOne({
       course: courseId,
       user: userId,
     });
     console.log('Course Progress Found');
    courseProgress.progress.forEach((item) => {
      if (item.lesson.equals(lessonId)) {
        item.finished = false;
      }
    });

    await courseProgress.save();

     if (!courseProgress) {
       return res
         .status(404)
         .json({ message: 'Trackerul de progres nu a fost găsit.' });
     }

     return res.status(200).json(courseProgress);
   } catch (error) {
     console.error(error);
     return res
       .status(500)
       .json({
         message: 'A apărut o eroare la marcarea lecției ca finalizată.',
       });
   }
};

export const getProgress = async (req, res, ) =>{
   const { courseId, userId } = req.params;
 try {
    const courseProgress = await CourseProgress.findOne({
      course: courseId,
      user: userId,
    });
    res.send(courseProgress)
 } catch (error) {
  res.status(404).json({ error: error})
 }
}

// /:courseId/:userId/