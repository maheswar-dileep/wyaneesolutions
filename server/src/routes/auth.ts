import { Router } from 'express';

import * as auth from '../controllers/auth';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validateData } from '../middlewares/validation';
import {
    googleLoginSchema,
    userLoginSchema,
    userRegistrationSchema,
} from '../schema/auth';

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
router
    .route('/google')
    .post(validateData(googleLoginSchema), asyncHandler(auth.googleSignIn));
router
    .route('/google/login')
    .post(validateData(googleLoginSchema), asyncHandler(auth.googleLogin));
router.route('/is-valid/:id').get(asyncHandler(auth.isValidUser));

export default router;
