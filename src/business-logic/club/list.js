import ClubModel from '../../models/club/club.model';

/**
 * List all clubs with admin an manager.userId populated
 * @returns {Club[]} List of clubs
 */
async function list(userId) {
  const clubs = await ClubModel.find({ admin: userId }).populate('admin managers.userId');
  return clubs;
}

export default list;
