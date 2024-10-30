import { Router } from 'express';

import authRoutes from './auth';
import trialRoutes from './trial';
const router = Router();

router.use('/auth', authRoutes);
router.use('/trial', trialRoutes);

export default router;
