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

/**
 * @swagger
 *  components:
 *    schemas:
 *      Video:
 *        type: object
 *        required:
 *          - url
 *          - title
 *          - studentName
 *          - emailStudent
 *          - emailTeacher
 *          - description
 *        properties:
 *          url:
 *            type: string
 *            format: uri
 *          title:
 *            type: string
 *          studentName:
 *            type: string
 *          emailStudent:
 *            type: string
 *            format: email
 *          emailTeacher:
 *            type: string
 *            format: email
 *          title:
 *            type: string
 * 
 *      PatchVideo:
 *        type: object
 *        required:
 *          - title
 *          - description
 *        properties:
 *          title:
 *            type: string
 *          description:
 *            type: string
 */

//Videos

/**
 * @swagger
 * /videos:
 *   post:
 *    description: Creation API for videos
 *    summary: create a new video
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schema/Video'
 *    responses:
 *      201:
 *        description: new video created
 *      400:
 *        description: Your request gives error
 */

/**
 * @swagger
 * /videos:
 *   get:
 *    summary: return all users
 *    tags: [User]
 *    parameters:
 *      - name:
 *          - title
 *          - studentName
 *          - emailStudent
 *          - emailTeacher
 *          - description
 *        in: query
 *        description: filters
 *        schema: 
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: all videos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schema/Videos'
 *      400:
 *        description: Invalid
 *      500:
 *        description: Internal Server Error
 */

/**
 * @swagger
 * /video/{id}:
 *   get:
 *    summary: return a user
 *    tags: [User]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: search by id
 *        schema: 
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: the user name
 *        content:
 *            application/json:
 *              schema:
 *                type: objet
 *                $ref: '#components/schema/User'
 *      404: 
 *        description: OOPS! Not Found
 *      500:
 *        description: Internal Server Error
 */

/**
 * @swagger
 * /video/{id}:
 *   patch:
 *    summary: patch a user
 *    tags: [User]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: the video id
 *        schema: 
 *          type: string
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schema/PatchVideo'
 *    responses:
 *      200:
 *        description: video updated
 *      400: 
 *        description: Your request gives error
 *      500:
 *        description: Internal server error
 */

/**
 * @swagger
 * /video/{id}:
 *   delete:
 *    summary: delete a user
 *    tags: [User]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: the video id
 *        schema: 
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: video delete
 *      404: 
 *        description: OOPS! Not Found
 */

router
  .post('/videos', validateVideo, createVideo)
  .get('/videos', validateVideo, renderVideos)
  .get('/video/:id', getByVideo)
  .patch('/video/:id', validatePatch, editVideo)
  .delete('/video/:id', validateVideo, deleteOneVideo )

export default router;