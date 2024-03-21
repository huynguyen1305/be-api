import mongoose, { Schema } from 'mongoose';

export const FilesSchema = new Schema(
  {
    url: { type: String, unique: true },
    name: { type: String },
    type: { type: String },
    size: { type: Number },
    path: { type: String },
  },
  {
    timestamps: true,
  },
);
export const Files = mongoose.model('Files', FilesSchema);
