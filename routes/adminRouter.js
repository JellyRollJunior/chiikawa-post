import { Router } from 'express';
import { codeValidation } from '../validations/codeValidation.js';
import { isMemberNotAdmin } from './middleware/auth.js';
import * as adminController from '../controllers/adminController.js';

const adminRouter = Router();
adminRouter.get('/', isMemberNotAdmin, adminController.getAdmin);
adminRouter.post('/', isMemberNotAdmin, codeValidation, adminController.postAdmin);

export { adminRouter };
