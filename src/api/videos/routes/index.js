import { Router } from 'express';
import {validateVideo, validatePatch} from '../validation/post.js';
import createVideo from '../controllers/post.js';
import  { 
  renderVideos, 
  getByVideo 
} from '../controllers/get.js';
import editVideo from '../controllers/patch.js';
import deleteOneVideo from '../controllers/delete.js'

const router = Router();

router
  .get('/videos', validateVideo, renderVideos)
  .get('/video/:id', getByVideo)
  .post('/videos', validateVideo, createVideo)
  .patch('/video/:id', validatePatch, editVideo)
  .delete('/video/:id', validateVideo, deleteOneVideo )

export default router;