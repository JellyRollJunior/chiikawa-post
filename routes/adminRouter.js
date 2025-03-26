import { Router } from 'express';
import { codeValidation } from '../validations/codeValidation.js';
import * as adminController from '../controllers/adminController.js';

const adminRouter = Router();
adminRouter.get('/', adminController.getAdmin);
adminRouter.post('/', codeValidation, adminController.postAdmin);

export { adminRouter };
