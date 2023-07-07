import CourseProgress from "../models/courseProgress"
import Course from "../models/course";
import Module from '../models/modules';
import Lesson from '../models/lesson'

// Middleware pentru verificarea finalizării tuturor lecțiilor dintr-un modul
export const checkModuleCompletion = async (req, res, next) => {
  const { lessonId } = req.body;
  const { courseId, userId } = req.params;

  try {
    const courseTracker = await CourseProgress.findOne({
      course: courseId,
      user: userId,
    });

    if (!courseTracker) {
      return res
        .status(404)
        .json({ message: 'Trackerul de progres nu a fost găsit.' });
    }

    const { progress } = courseTracker;

    const lesson = await Lesson.findById(lessonId);

    if (!lesson) {
      return res.status(404).json({ message: 'Lecția nu a fost găsită.' });
    }

    const moduleId = lesson.module;
    const courseModule = await Module.findById(moduleId);

    const moduleLessons = courseModule.lessons;
    const moduleLessonIds = moduleLessons.map((lesson) =>
      lesson._id.toString()
    );

    const allModuleLessonsCompleted = moduleLessonIds.every((lessonId) =>
      progress.lessons.finishedLessons.includes(lessonId)
    );

    if (
      allModuleLessonsCompleted &&
      !progress.finishedModules.includes(moduleId)
    ) {
      progress.finishedModules.push(moduleId);
    }
    courseTracker.progress = progress;
    await courseTracker.save();

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        message: 'A apărut o eroare la verificarea finalizării modulului.',
      });
  }
};



export const addFinishedLesson = async (req, res, next) => {
  // /:courseId/:userId/
  const {courseId, userId} = req.params
  const { lessonId } = req.body;

  try {
    const courseTracker = await CourseProgress.findOne({course:courseId, user:userId});
    const {progress}= courseTracker
    // Verificăm dacă lecția există deja în finishedLessons
    if (progress.lessons.finishedLessons.includes(lessonId)) {
      return res
        .status(400)
        .json({ message: 'Lecția a fost deja marcată ca terminată.' });
    }

    // Adăugăm lecția în array-ul finishedLessons
    progress.lessons.finishedLessons.push(lessonId);

     courseTracker.progress = progress;
     courseTracker.save()
    console.log('lectia a fost adaugata in finishedLessons', courseTracker)
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'A apărut o eroare la adăugarea lecției în finishedLessons.',
    });
  }
};

export const updateProgress = async (req, res) => {
  const { courseId, userId } = req.params;
  const { lessonId } = req.body;
  try {
    const courseTracker = await CourseProgress.findOne({
      course: courseId,
      user: userId,
    });

    if (!courseTracker) {
      return res
        .status(404)
        .json({ message: 'Trackerul de progres nu a fost găsit.' });
    }

    const { finishedModules } = courseTracker.progress.modules;
    const { finishedLessons } = courseTracker.progress.lessons;


    // Obțineți id-ul lecției care a fost marcată ca terminată
    const { lessonId } = req.body;

    // Verificați dacă lecția există în array-ul finishedLessons
    const isLessonFinished =
      finishedLessons && finishedLessons.includes(lessonId);

    if (isLessonFinished) {
      return res
        .status(400)
        .json({ message: 'Lecția a fost deja marcată ca terminată.' });
    }

    // Marcați lecția ca terminată și adăugați id-ul în array-ul finishedLessons
    if (finishedLessons) {
      finishedLessons.push(lessonId);
    } else {
      courseTracker.progress.finishedLessons = [...finishedLessons, lessonId];
    }

   courseTracker.set()

    return res.status(200).json({ progress: courseTracker.progress });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'A apărut o eroare la actualizarea progresului.' });
  }
};





export const getProgress = async (req, res) => {
  const { courseId, userId } = req.params;

  try {
    const courseTracker = await CourseProgress.findOne({
      course: courseId,
      user: userId,
    });

    if (!courseTracker) {
      return res
        .status(404)
        .json({ message: 'Trackerul de progres nu a fost găsit.' });
    }

    return res.status(200).json({ progress: courseTracker.progress });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'A apărut o eroare la obținerea progresului.' });
  }
};


export const removeLessonFinished = async (req, res) => {
  const { courseId, userId } = req.params;
  const { lessonId } = req.body;

  try {
    const courseTracker = await CourseProgress.findOne({
      course: courseId,
      user: userId,
    });

    if (!courseTracker) {
      return res
        .status(404)
        .json({ message: 'Trackerul de progres nu a fost găsit.' });
    }

    const { progress } = courseTracker;

    // Verificăm dacă lecția există în array-ul finishedLessons
    const lessonIndex = progress.finishedLessons.indexOf(lessonId);
    if (lessonIndex === -1) {
      return res
        .status(400)
        .json({ message: 'Lecția nu a fost marcată ca terminată.' });
    }

    // Eliminăm lecția din array-ul finishedLessons
    progress.finishedLessons.splice(lessonIndex, 1);

    await courseTracker.save();

    return res
      .status(200)
      .json({ message: 'Lecția a fost marcată ca nefinalizată.' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        message: 'A apărut o eroare la marcarea lecției ca nefinalizată.',
      });
  }
};

export const removeModuleFinished = async (req, res) => {};
// /:courseId/:userId/