import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const EmailListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    emailEntries: [
      {
        name: { type: String, trim: true },
        email: {
          type: String,
          trim: true,
          lowercase: true,
          unique: true,
          required: 'Email address is required',
          match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
          ],
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('EmailList', EmailListSchema);
