import { Router } from 'express';
import * as postController from '../controllers/postController.js';

const postRouter = Router();
postRouter.get('/', postController.getPostForm);
postRouter.post('/', postController.postPost);
postRouter.delete('/:postId', postController.deletePost);

export { postRouter };
