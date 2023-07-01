import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;


const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
  
    facebookGroup: {
      type: String,
      trim: true,
      minlength: 3,
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
    modules: [{
      type : ObjectId,
      ref : 'Module',
    }],
    lessons: [{
      type : ObjectId,
      ref : 'Lesson',
    }],
  },
  { timestamps: true }
);


export default mongoose.model("Course", courseSchema);