import Course from '../models/course';
import Module from '../models/modules'
import Lesson from '../models/lesson';
import {deleteVideo} from '../utils/fileManager'

// Create a module within a course
export const createModule = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, lessons } = req.body;

    const course = await Course.findOne({ slug });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const module = await new Module({ title, lessons });
   await module.save()
    course.modules.push(module);
    await course.save();

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create module' });
  }
};

// Update a module within a course
export const updateModule = async (req, res) => {
  try {
    const { slug, moduleId } = req.params;
    const { title, lessons } = req.body;

    const course = await Course.findOne({ slug });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const module = course.modules.id(moduleId);

    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    module.title = title;
    module.lessons = lessons;
    await course.save();

    res.json(module);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update module' });
  }
};

export const deleteModule = async (req, res) => {
  try {
    const { slug, moduleId } = req.params;

    // Găsește modulul care urmează să fie șters
    const module = await Module.findOne({ _id: moduleId });

    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    // Șterge video-urile asociate fiecărei lectii din modul, dacă există
    for (const lessonId of module.lessons) {
      const lesson = await Lesson.findById(lessonId);

      if (lesson && lesson.video) {
       await deleteVideo(lesson.video.Key);
      }
    }

    // Șterge modulul și lectiile asociate
    await Module.findByIdAndRemove(moduleId);
    await Lesson.deleteMany({ module: moduleId });

    console.log('Module and associated lessons deleted successfully');
    res.status(200).json({ message: 'Module and associated lessons deleted' });
  } catch (error) {
    console.error('Error deleting module:', error);
    res.status(500).json({ error: 'Failed to delete module' });
  }
};

// Read a single module within a course
export const getModule = async (req, res) => {
  try {
    const { slug, moduleId } = req.params;

    const course = await Course.findOne({ slug });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const module = await Module.findById(moduleId).populate('lessons');

    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    console.log('DATE MODUL ', module)
    res.json(module);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch module' });
  }
};

// Read all modules within a course
export const getAllModules = async (req, res) => {
  try {
    const { slug } = req.params;

    const course = await Course.findOne({ slug });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const modules = course.modules;

    res.json(modules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch modules' });
  }
};
