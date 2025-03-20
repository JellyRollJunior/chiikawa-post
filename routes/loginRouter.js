import { Router } from 'express';
import * as loginController from '../controllers/loginController.js';

const loginRouter = Router();
loginRouter.get('/', loginController.getLogin);
loginRouter.post('/', loginController.postLogin);

export { loginRouter };
