import { Router } from 'express';
import {validateVideo, validatePatch} from '../validation/post.js';
import createVideo from '../controllers/post.js';
import  { 
  renderVideos, 
  getByVideo 
} from '../controllers/get.js';
import editVideo from '../controllers/patch.js';

const router = Router();

router
  .get('/videos', validateVideo, renderVideos)
  .get('/video', getByVideo)
  .post('/videos', validateVideo, createVideo)
  .patch('/video/:id', validatePatch, editVideo)

export default router;