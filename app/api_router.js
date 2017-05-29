import { Router } from 'express';
import * as Posts from './controllers/post_controller';
import createReport from './controllers/report_controller';

const router = Router();

router.route('/posts')
  .get(Posts.getPosts)
  .post(Posts.createPost);

router.route('/posts/:id')
  .get(Posts.getPost)
  .put(Posts.editPost)
  .delete(Posts.deletePost);

router.post('/report', createReport);

router.get('/search', Posts.getByTags);

router.get('/tags', Posts.getTrendingTags);

export default router;
