import { Router } from 'express';
import ClubController from '../controllers/club/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', authMiddleware, ClubController.list);
router.post('/', authMiddleware, ClubController.create);

router.post('/:clubId/members', authMiddleware, ClubController.addMember);
router.get('/:clubId/members', authMiddleware, ClubController.listMembers);

router.post('/:clubId/subscriptions', authMiddleware, ClubController.addSubscription);
router.get('/:clubId/subscriptions', authMiddleware, ClubController.listSubscriptions);

export default router;
