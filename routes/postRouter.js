import { Router } from 'express';
import { postValidation } from '../validations/postValidation.js';
import { isAuthenticated, isAdmin } from './middleware/auth.js';
import * as postController from '../controllers/postController.js';

const postRouter = Router();
postRouter.get('/', isAuthenticated, postController.getPostForm);
postRouter.post('/', isAuthenticated, postValidation, postController.postPost);
postRouter.post('/delete/:postId', isAdmin, postController.deletePost);

export { postRouter };
