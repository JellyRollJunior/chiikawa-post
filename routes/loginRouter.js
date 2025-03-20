import { Router } from 'express';
import { loginValidation } from '../validations/loginValidation.js';
import * as loginController from '../controllers/loginController.js';

const loginRouter = Router();
loginRouter.get('/', loginController.getLogin);
loginRouter.post('/', loginValidation, loginController.postLogin);

export { loginRouter };
