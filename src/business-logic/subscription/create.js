import HTTPError from '../../errors/http.error.js';
import subscriptionErrors from '../../errors/subscription.errors.js';
import SubscriptionModel from '../../models/subscription/subscription.model.js';
import ClubLogic from '../club/index.js';
import checkClubExists from '../../utils/check-club-exists.util.js';

/**
 * Create Subscription
 * @param {object} args - Required arguments
 * @param {string} args.name - Subscription's name
 * @param {string} args.price - Subscription's price
 * @param {string} [args.description] - Subscription's description
 * @param {string} args.clubId - Club id associated to the member
 * @param {string} args.userId - req.userId (from token) must be the club admin
 * @returns {Subscription} Created subscription
 */
async function create(args) {
  const { clubId, userId } = args;

  await checkClubExists({
    clubId,
    errorObject: new HTTPError({ ...subscriptionErrors.clubNotFound, code: 404 }),
  });
  await ClubLogic.checkIfUserIsAdmin({ clubId, userId });

  const subscription = await SubscriptionModel.create(args);
  return subscription;
}

export default create;
