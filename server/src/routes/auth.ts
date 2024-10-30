import { Router } from 'express';

import * as auth from '../controllers/auth';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validateData } from '../middlewares/validation';
import { userLoginSchema, userRegistrationSchema } from '../schema/auth';

const router = Router();

router
    .route('/register')
    .post(
        validateData(userRegistrationSchema),
        asyncHandler(auth.createAccount)
    );
router
    .route('/login')
    .post(validateData(userLoginSchema), asyncHandler(auth.login));
router.route('/refresh-token').post(asyncHandler(auth.getRefreshToken));

export default router;
