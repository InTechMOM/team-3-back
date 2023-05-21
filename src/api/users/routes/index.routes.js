import { Router } from 'express'
import {
  validateCreation,
  validatePatch,
  validateLogin}  from '../validation/post.js'

import {  
  renderUsers,
  getByName,
} from '../controllers/get.js';

import {
  createUser, 
  UserLogin
} from '../controllers/post.js';
import editUser from '../controllers/patch.js';
import deleteOne from '../controllers/delete.js'

const router = Router()

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - lastname
 *          - email
 *          - rol
 *        properties:
 *          name:
 *            type: string
 *          lastname:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *          rol:
 *            type: string
 *            enum: [student, teacher]
 *        example:
 *          name: Brendan
 *          lastname: Each
 *          email: brendan@email.com
 *          rol: teacher
 */

//Users

/**
 * @swagger
 * /users:
 *   post:
 *    description: Creation API for users
 *    summary: create a new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schema/User'
 *    responses:
 *      200:
 *        description: new user created
 *      400:
 *        description: Bad request
 */

/**
 * @swagger
 * /users:
 *   get:
 *    description: Creation API for users
 *    summary: return all users
 *    tags: [User]
 *    responses:
 *      200:
 *        description: all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schema/User'
 *      500:
 *        description: Internal Server Error
 */

/**
 * @swagger
 * /user:
 *   get:
 *    description: Creation API for users
 *    summary: return user
 *    tags: [User]
 *    responses:
 *      200:
 *        description: all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schema/User'
 *      500:
 *        description: Internal Server Error
 */


router
  .post('/users', validateCreation, createUser)
  .get('/users', renderUsers)
  .get('/user',getByName)
  .patch('/user/:id', validatePatch, editUser)
  .delete('/user/:id', validateCreation, deleteOne)
  
  //Login
  .post('/login', validateLogin, UserLogin);


export default router;