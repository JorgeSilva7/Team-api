import UserModel from '../../models/user/user.model.js';
import randomatic from 'randomatic';

/**
 * Create new user
 * @returns {User & password} Created user
 */
async function create(user) {
  const generatedPassword = randomatic('aA0', 8);
  const userCreated = await UserModel.create({ ...user, password: generatedPassword });
  return { user: userCreated, generatedPassword };
}

export default create;
