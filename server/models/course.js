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
    deschisInscrieri: {
      type: Boolean,
      default: false,
    },
    stopInscrieri: {
      type: Date,
    },
    dataIncepereCurs: {
      type: Date,
    },
    dataFinalCurs: {
      type: Date,
    },

    locuriDisponibile: {
      type: Number,
      default: 30,
    },

    inscrisiEditiaCurenta: {
      type: Number,
      default: 0,
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
    discountedPrice: {
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
    modules: [
      {
        type: ObjectId,
        ref: 'Module',
      },
    ],
  },
  { timestamps: true }
);


export default mongoose.model("Course", courseSchema);