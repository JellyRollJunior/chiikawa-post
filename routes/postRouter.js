import { Router } from 'express';
import { postValidation } from '../validations/postValidation.js';
import * as postController from '../controllers/postController.js';

const postRouter = Router();
postRouter.get('/', postController.getPostForm);
postRouter.post('/', postValidation, postController.postPost);
postRouter.post('/delete/:postId', postController.deletePost);

export { postRouter };
