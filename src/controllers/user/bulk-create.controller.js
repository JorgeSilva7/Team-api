import UsersLogic from '../../business-logic/users/index.js';
import { returnErrorResponse } from '../../errors/error-response.js';
import { bulkCreateValidation } from '../../validations/user.validations.js';

async function bulkCreate(req, res) {
  try {
    await bulkCreateValidation.validateAsync(req.body);

    const createdUsers = await Promise.all(
      req.body.map((user) => UsersLogic.create(user)),
    );

    return res.status(201).send({ createdUsers });
  } catch (error) {
    return returnErrorResponse({ error, res });
  }
}

export default bulkCreate;
