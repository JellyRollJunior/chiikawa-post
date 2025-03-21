import { Router } from 'express';
import * as adminController from '../controllers/adminController.js';

const adminRouter = Router();
adminRouter.get('/', adminController.getAdmin);

export { adminRouter };
