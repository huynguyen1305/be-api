import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
  },
  {
    timestamps: true,
  },
);
export const Project = mongoose.model('User', UserSchema);
