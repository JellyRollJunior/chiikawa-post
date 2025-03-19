import { Router } from 'express';
import * as signUpController from '../controllers/signUpController.js';
import { userValidation } from '../validations/signUpValidation.js';

const signUpRouter = Router();
signUpRouter.get('/', signUpController.getSignUp);
signUpRouter.post('/', userValidation, signUpController.postSignUp);

export { signUpRouter };
