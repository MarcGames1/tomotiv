//  createLesson,
//   updateLesson,
//   getLesson,
//   getAllLessons,

import Lesson from '../models/lesson';
import Course from '../models/course';
import Module from '../models/modules';
import {deleteVideo} from '../utils/fileManager'
import slugify from 'slugify';


import { isAdmin } from '../middlewares';

export const createLesson = async (req, res) => {
  try {
    const { courseSlug, moduleId } = req.params;
    const { title, content, video, free_preview } = req.body;

    // Găsim cursul pe baza slug-ului
    const course = await Course.findOne({ slug: courseSlug });

    // Verificăm dacă cursul există
    if (!course) {
      return res.status(404).json({ error: 'Cursul nu a fost găsit.' });
    }

    // Găsim modulul pe baza ID-ului
    const module = await Module.findById(moduleId);

    // Verificăm dacă modulul există
    if (!module) {
      return res.status(404).json({ error: 'Modulul nu a fost găsit.' });
    }

    // Creăm o nouă lecție
    const lesson = new Lesson({
      title,
      slug: slugify(title.toLowerCase()),
      content,
      video,
      free_preview,
      module: module._id,
    });

    // Salvăm lecția în baza de date
    await lesson.save();
    
    // Adăugăm lecția în lista de lecții a modulului
    module.lessons.push(lesson._id);
    await module.save();

    // Adăugăm lecția în lista de lecții a cursului
    res.status(201).json({ message: 'Lecția a fost creată cu succes.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Eroare server.' });
  }
};

export const updateLesson = async (req, res) => {
try {
    const {courseSlug, moduleId, lessonId } = req.params
  const {title, content} = req.body
  const course = await Course.findOne({ courseSlug })
    .select('instructor')
    .exec();
    const lessonUpdate = async () =>{
      const updated = await Lesson.findByIdAndUpdate(
        lessonId,
        {
          title,
          slug: slugify(title.toLowerCase()),
          content,
        },
        { new: true }
      ).exec();

     res.json(updated);
    }
  if (req.auth._id != course.instructor ) {
      return res.status(400).send('Unauthorized');
      isAdmin(req, res, lessonUpdate)
    }


   lessonUpdate()

 
} catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
}
};
export const getLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const lesson = await Lesson.findById(lessonId).populate('video');

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    res.status(200).json({ lesson });
  } catch (error) {
    console.error('Error retrieving lesson:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllLessons = async (req, res) => {};


export const deleteLesson = async (req, res) => {
    const {lessonId} = req.params
try {
  const lesson = await Lesson.findById(lessonId);
  if (lesson && lesson.video) {
    deleteVideo(lesson.video._id);
  }
  await Lesson.findByIdAndDelete(lessonId);
  // Actualizează documentul course și elimină id-ul lectiei din array-ul modules
  await Course.updateOne(
    { modules: { $elemMatch: { lessons: lessonId } } },
    { $pull: { 'modules.$.lessons': lessonId } }
  );
  res.status(200).send({ Message: 'Lesson deleted successfully' });
} catch (error) {
    console.error(error)
}
};
