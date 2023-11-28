import UsersLogic from '../../business-logic/users';
import { returnErrorResponse } from '../../errors/error-response';
import { bulkCreateValidation } from '../../validations/user.validations';

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
