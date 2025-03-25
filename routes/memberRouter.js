import { Router } from 'express';
import { codeValidation } from '../validations/codeValidation.js';
import * as memberController from '../controllers/memberController.js';

const memberRouter = Router();
memberRouter.get('/', memberController.getMember);
memberRouter.post('/', codeValidation, memberController.postMember);

export { memberRouter };
