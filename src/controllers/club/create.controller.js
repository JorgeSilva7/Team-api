import ClubLogic from '../../business-logic/club/index.js';
import { returnErrorResponse } from '../../errors/error-response.js';
import { createValidation } from '../../validations/club.validations.js';

/**
 * Create club
 * @param {Express.Request} req - Express request
 * @param {Express.Response} res - Express response
 * @returns {Express.Response} 201 created club
 */
async function create(req, res) {
  try {
    const { body, userId } = req;
    await createValidation.validateAsync(body);

    const club = await ClubLogic.create({ ...body, adminId: userId });

    return res.status(201).send({ club });
  } catch (error) {
    return returnErrorResponse({ error, res });
  }
}

export default create;
