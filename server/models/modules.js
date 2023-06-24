import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const moduleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      Unique: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    status: {
      type: [String],
      default: ['Unfinished'],
      enum: ['Unfinished', 'In Progress', 'Finished'],
    },
    lessons: [
      {
        type: ObjectId,
        ref: 'Lesson',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Module', moduleSchema);
