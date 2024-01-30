import mongoose, { Schema } from 'mongoose';

export const CategorySchema = new Schema(
  {
    title: { type: String, unique: true },
    description: { type: String },
    slug: { type: String, unique: true },
    feature_image: { type: String },
  },
  {
    timestamps: true,
  },
);
export const Category = mongoose.model('category', CategorySchema);
