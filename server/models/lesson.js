import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    content: {
      type: String,
    },
      
    video: {
      type:ObjectId,
      ref: 'Video',
    },
    free_preview: {
      type: Boolean,
      default: false,
    },
    module: {
      type: ObjectId,
      ref: 'Module',
    },
   
  },
  { timestamps: true }
);

export default mongoose.model('Lesson', lessonSchema);
