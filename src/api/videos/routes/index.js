import { Router } from 'express';
import validateVideo from '../Validation/post.js';
import createVideo from '../controllers/post.js';

const router = Router();

router
  .get('/video')
  .post('/videos', validateVideo, createVideo)

export default router;