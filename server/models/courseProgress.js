import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;


const CourseProgress = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  course: {
    type: ObjectId,
    ref: 'Course',
  },
  progress: {
    modules: {
      finishedModules: [
        {
          type: ObjectId,
          ref: 'Course',
        },
      ],
      allModules: [
        {
          type: ObjectId,
          ref: 'Module',
        },
      ],
    },
    lessons: {
      finishedLessons: [
        {
          type: ObjectId,
          ref: 'Lesson',
        },
      ],
      allLessons: [
        {
          type: ObjectId,
          ref: 'Lesson',
        },
      ],
    },
  },
  finished: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('CourseProgress', CourseProgress);
// { type: ObjectId, ref: 'Module' },
//         { type: ObjectId, ref: 'Lesson' },
//        { videoStatus: {},}