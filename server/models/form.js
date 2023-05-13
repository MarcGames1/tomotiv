import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema;
const formSchema = new Schema(
  {
    nume: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: [String],
      default: ['Nou'],
    enum: ['Nou', 'Asteapta raspuns de la noi', 'Asteptam raspuns de la el', 'Rezolvat'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Form', formSchema);