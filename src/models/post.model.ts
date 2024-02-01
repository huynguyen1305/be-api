import mongoose, { Schema } from 'mongoose';

export const PostSchema = new Schema(
  {
    title: { type: String, unique: true },
    slug: { type: String, unique: true },
    valueSearch: { type: String, text: true },
    description: { type: String },
    content: { type: String },
    feature_image: { type: String },
    feature_audio: { type: String },
    category: { type: [String] },
    isPublic: { type: Boolean },
  },
  {
    timestamps: true,
  },
);
PostSchema.index(
  { valueSearch: 'text' },
  {
    weights: {
      title: 5,
      valueSearch: 10,
    },
  },
);

export const Post = mongoose.model('Post', PostSchema);
