import { model } from 'mongoose';
import userSchema from './user.schema.js';

const UserModel = model('User', userSchema);

export default UserModel;
