import { Router } from 'express';
import UserController from '../controllers/user/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import isAdminMiddleware from '../middlewares/is-admin.middleware.js';

const router = Router();

router.get('/', authMiddleware, isAdminMiddleware, UserController.list);
router.post('/', authMiddleware, isAdminMiddleware, UserController.create);
router.post('/bulk', authMiddleware, isAdminMiddleware, UserController.bulkCreate);

export default router;
