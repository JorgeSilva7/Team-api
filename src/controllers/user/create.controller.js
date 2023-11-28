import UsersLogic from '../../business-logic/users/index.js';
import { returnErrorResponse } from '../../errors/error-response.js';
import { createValidation } from '../../validations/user.validations.js';

async function create(req, res) {
  try {
    await createValidation.validateAsync(req.body);

    const { user, generatedPassword } = await UsersLogic.create(req.body);

    return res.status(201).send({ user, generatedPassword });
  } catch (error) {
    return returnErrorResponse({ error, res });
  }
}

export default create;
