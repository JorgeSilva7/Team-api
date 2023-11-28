import clubErrors from '../../errors/club.errors.js';
import HTTPError from '../../errors/http.error.js';
import ClubModel from '../../models/club/club.model.js';

/**
 * Check if the user is the admin of the club
 * @param {string} args.clubId - Club id
 * @param {string} args.userId - Candidate user id
 * @throws {HTTPError} 403 if the user doesnt the club admin
 */
async function checkIfTheUserIsTheClubAdmin({ clubId, userId }) {
  const club = await ClubModel.findOne({ _id: clubId, admin: userId });

  if (!club) {
    throw new HTTPError({ ...clubErrors.userIsNotTheAdmin, code: 403 });
  }
}

export default checkIfTheUserIsTheClubAdmin;
