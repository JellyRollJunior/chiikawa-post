import { Router } from 'express';
import { userValidation } from '../validations/signUpValidation.js';
import * as signUpController from '../controllers/signUpController.js';

const signUpRouter = Router();
signUpRouter.get('/', signUpController.getSignUp);
signUpRouter.post('/', userValidation, signUpController.postSignUp);

export { signUpRouter };
