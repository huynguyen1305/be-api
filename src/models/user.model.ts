import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    displayName: { type: String },
  },
  {
    timestamps: true,
  },
);

UserSchema.plugin(passportLocalMongoose);

export const Users = mongoose.model('User', UserSchema);
