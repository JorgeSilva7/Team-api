import UsersLogic from '../../business-logic/users/index.js';
import { returnErrorResponse } from '../../errors/error-response.js';

async function list(_req, res) {
  try {
    const users = await UsersLogic.list();

    return res.status(200).send({ users });
  } catch (error) {
    return returnErrorResponse({ error, res });
  }
}

export default list;
