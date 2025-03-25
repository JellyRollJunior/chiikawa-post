import { Router } from 'express';
import { userValidation } from '../validations/signUpValidation.js';
import * as adminController from '../controllers/adminController.js';

const adminRouter = Router();
adminRouter.get('/', adminController.getAdmin);
adminRouter.post('/', userValidation, adminController.postAdmin);

export { adminRouter };
