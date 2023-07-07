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
  progress: [
    {
      lesson: {
        type: ObjectId,
        ref: 'Lesson',
      },
      finished: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

export default mongoose.model('CourseProgress', CourseProgress);
  