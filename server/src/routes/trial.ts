import { Router } from 'express';

import * as trial from '../controllers/trial';
import { asyncHandler } from '../middlewares/asyncHandler';

const router = Router();

router.route('/update-trial/:id').post(asyncHandler(trial.update));

export default router;
