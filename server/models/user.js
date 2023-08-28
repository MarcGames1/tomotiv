import mongoose from "mongoose";
const {Schema} = mongoose;
const { ObjectId } = Schema;

const userSchema = new Schema(
  {
    nume: {
      type: String,
      trim: true,
      required: true,
    },
    preNume: {
      type: String,
      trim: true,
      
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },

    picture: {
      type: String,
      default: '/avatar.png',
    },

    role: {
      type: [String],
      default: ['Subscriber'],
      enum: ['Subscriber', 'Instructor', 'Admin'],
    },
    passwordResetCode: {
      data: String || undefined,
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {},
    courses: [{ type: ObjectId, ref: 'Course' }],
    progress: {
      coursesProgress: [
        { type: ObjectId, ref: 'CourseProgress' },
      ],
    },
  },
  { timestamps: true }
);


export default mongoose.model('User', userSchema);