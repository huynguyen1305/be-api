import { Users } from '../models/user.model';
// import bcrypt from 'bcryptjs';

export const userService = {
  getAll: async () => {
    const users = await Users.find({});
    return users;
  },
  getById: async (id: string) => {
    const user = await Users.findById(id);
    return user;
  },
  getByEmail: async (email: string) => {
    const user = await Users.findOne({ email: email });
    return user;
  },
  createUser: async ({ email, role, hashPassword }: { email: string; role: string; hashPassword: string }) => {
    const user = await Users.create({ email, role, hashPassword });
    return user;
  },
  updateUser: async (id: string, data: any) => {
    const user = await Users.findOneAndUpdate({ _id: id }, { $set: data }, { new: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },

  deleteUser: async (id: string) => {
    const deleteUser = await Users.findOneAndDelete({ _id: id });
    if (!deleteUser) {
      throw new Error('User not found');
    }
    return deleteUser;
  },
  resetPassword: async (email: string, password: string) => {
    const user = await Users.findOneAndUpdate({ email: email }, { $set: { hashPassword: password } }, { new: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },
  // changePassword: async (email: string, oldPassword: string, newPassword: string) => {
  //   const user = await userService.getByEmail(email);
  //   const isMatch = await bcrypt.compare(oldPassword, user.hashPassword);
  //   if (!isMatch) {
  //     throw new Error('email or password is not correct' + newPassword);
  //   }
  //   if (!user) {
  //     throw new Error('User not found');
  //   }
  //   const newHashPassword = await bcrypt.hashSync(newPassword, 8);
  //   const newUser = await Users.updateOne({ email: email }, { $set: { hashPassword: newHashPassword } });
  //   return newUser;
  // },
};
