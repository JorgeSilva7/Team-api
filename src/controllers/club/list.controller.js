import ClubLogic from '../../business-logic/club/index.js';
import { returnErrorResponse } from '../../errors/error-response.js';

/**
 * List clubs
 * @param {Express.Request} _req - Express request
 * @param {Express.Response} res - Express response
 * @returns {Express.Response} 200 with a list of clubs
 */
async function list(req, res) {
  try {
    const { userId } = req;
    const clubs = await ClubLogic.list(userId);

    return res.send({ clubs });
  } catch (error) {
    return returnErrorResponse({ error, res });
  }
}

export default list;
