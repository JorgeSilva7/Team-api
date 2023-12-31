import authErrors from '../../errors/auth.errors.js';
import HTTPError from '../../errors/http.error.js';
import UsersLogic from '../users/index.js';
import { generateToken } from '../../utils/jwt.util.js';

/**
 * Compare the user password with the candidate password
 * @param {string} args.user - User model
 * @param {string} args.candidatePassword - Candidate password to check
 * @throws {HttpError} 400 if the password are not the same
 */
async function comparePassword({ user, candidatePassword }) {
  const passwordMatch = await user.comparePassword(candidatePassword);

  if (!passwordMatch) {
    throw new HTTPError({ ...authErrors.login.invalidCredentials, code: 400 });
  }
}

/**
 * Login: Find user by email and compare passwords
 * @param {string} args.email - Input email
 * @param {string} args.password - Input password
 * @returns {object} JWT and User object
 */
async function login({ email, password }) {
  const user = await UsersLogic.getOne({
    query: { email: new RegExp(`^${email}$`, 'i') },
    select: ['password', 'isAdmin', 'name', 'email'],
  });

  if (!user) {
    throw new HTTPError({ ...authErrors.login.invalidCredentials, code: 400 });
  }

  await comparePassword({ user, candidatePassword: password });

  const token = await generateToken({
    data: { userId: user._id },
    expiresIn: '1d',
  });

  return { token, user };
}

export default login;
