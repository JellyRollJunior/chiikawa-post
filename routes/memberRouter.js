import { Router } from 'express';
import * as memberController from '../controllers/memberController.js';

const memberRouter = Router();
memberRouter.get('/', memberController.getMember);

export { memberRouter };
