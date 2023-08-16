import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const video = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },

    module: {
      type: ObjectId,
      ref: 'Module  ',
    },
    path: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Video', video);
