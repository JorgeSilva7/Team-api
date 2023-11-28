import AuthLogic from '../../business-logic/auth/index.js';
import { returnErrorResponse } from '../../errors/error-response.js';
import { loginValidation } from '../../validations/auth.validations.js';

/**
 * User Login controller
 * @param {Express.Request} req - Express request
 * @param {Express.Response} res - Express response
 * @returns {Express.Response} 200 token
 */
async function login(req, res) {
  try {
    const { body } = req;

    await loginValidation.validateAsync(body);

    const { token, user } = await AuthLogic.login(body);

    return res.status(200).send({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    return returnErrorResponse({ error, res });
  }
}

export default login;
