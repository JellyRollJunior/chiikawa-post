import { Router } from 'express';
import { codeValidation } from '../validations/codeValidation.js';
import { isAuthenticated } from './middleware/auth.js';
import * as adminController from '../controllers/adminController.js';

const adminRouter = Router();
adminRouter.get('/', isAuthenticated, adminController.getAdmin);
adminRouter.post('/', isAuthenticated, codeValidation, adminController.postAdmin);

export { adminRouter };
