import mongoose from "mongoose";

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
      type: {},
      minlength: 200,
    },
    video: {},
    free_preview: {
      type: Boolean,
      default: false,
    },
    module: {
      type: ObjectId,
      ref: 'Module  ',
    },
  },
  { timestamps: true }
);


const moduleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
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


const courseSchema = new mongoose.Schema(
  {
    name: {
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
    description: {
      type: {},
      minlength: 200,
      required: true,
    },
    price: {
      type: Number,
      default: 3000,
    },
    image: {},
    category: String,
    published: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: true,
    },
    instructor: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    modules: [moduleSchema],
    lessons: [lessonSchema],
  },
  { timestamps: true }
);

const Lesson = mongoose.model('Lesson', lessonSchema)
export default mongoose.model("Course", courseSchema);
