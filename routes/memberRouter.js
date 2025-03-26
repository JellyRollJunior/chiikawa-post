import { Router } from 'express';
import { codeValidation } from '../validations/codeValidation.js';
import { isAuthenticated } from './middleware/auth.js';
import * as memberController from '../controllers/memberController.js';

const memberRouter = Router();
memberRouter.get('/', isAuthenticated, memberController.getMember);
memberRouter.post('/', isAuthenticated, codeValidation, memberController.postMember);

export { memberRouter };
