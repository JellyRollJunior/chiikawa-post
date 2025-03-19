import { Router } from 'express';
import * as authController from '../controllers/authController.js';
import { userValidation } from '../validations/signUpValidation.js';

const authRouter = Router();
authRouter.get('/sign-up', authController.getSignUp);
authRouter.post('/sign-up', userValidation, authController.postSignUp);

export { authRouter };
