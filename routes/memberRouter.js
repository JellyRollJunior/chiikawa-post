import { Router } from 'express';
import { codeValidation } from '../validations/codeValidation.js';
import { userNotMemberNotAdmin } from './middleware/auth.js';
import * as memberController from '../controllers/memberController.js';

const memberRouter = Router();
memberRouter.get('/', userNotMemberNotAdmin, memberController.getMember);
memberRouter.post('/', userNotMemberNotAdmin, codeValidation, memberController.postMember);

export { memberRouter };
