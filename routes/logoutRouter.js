import { Router } from 'express';
import * as logoutController from '../controllers/logoutController.js';

const logoutRouter = Router();
logoutRouter.get('/', logoutController.getLogout);

export { logoutRouter };
