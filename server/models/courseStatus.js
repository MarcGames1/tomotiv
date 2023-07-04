import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;


const CourseStatus = new mongoose.Schema({
  user: { 
    type: ObjectId, ref: 'User',
 },
  course: {
    type: ObjectId,
    ref: 'Course',
  },
  progress: {},
  finished: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('CourseStatus', CourseStatus);
// { type: ObjectId, ref: 'Module' },
//         { type: ObjectId, ref: 'Lesson' },
//        { videoStatus: {},}