import { Router } from 'express';
import validateVideo from '../Validation/post.js';
import createVideo from '../controllers/post.js';

const routerVideo = Router();

routerVideo.post('/video', validateVideo, createVideo);

export default routerVideo;