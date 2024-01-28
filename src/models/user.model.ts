import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
    isFirstLogin: { type: Boolean },
  },
  {
    timestamps: true,
  },
);
export const Project = mongoose.model('User', UserSchema);
