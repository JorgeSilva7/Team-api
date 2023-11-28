import { Router } from 'express';
import AuthController from '../controllers/auth/index.js';

const router = Router();

router.post('/login', AuthController.login);

export default router;
