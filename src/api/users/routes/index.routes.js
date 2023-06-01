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
 *            enum:
 *              - student
 *              - teacher
 *        example:
 *          name: Brendan
 *          lastname: Each
 *          email: brendan@email.com
 *          rol: teacher
 * 
 *      Patch:
 *        type: object
 *        required:
 *          - name
 *          - lastname
 *        properties:
 *          name:
 *            type: string
 *          lastname:
 *            type: string
 *        example:
 *          name: Carolina
 *          lastname: Cordoba
 * 
 *      Login:
 *        type: object
 *        required:
 *          - email
 *          - rol
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *          rol:
 *            type: string
 *            enum:
 *              - student
 *              - teacher
 *          example:
 *            email: brendan@email.com
 *            rol: teacher
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
 *      201:
 *        description: new user created
 *      400:
 *        description: Bad request
 */

/**
 * @swagger
 * /users:
 *   get:
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
 *    summary: return a user
 *    tags: [User]
 *    parameters:
 *      - name: name
 *        in: query
 *        description: search by name
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
 * /user/{id}:
 *   patch:
 *    summary: update a user
 *    tags: [User]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: the user id
 *        schema: 
 *          type: string
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schema/Patch'
 *    responses:
 *      200:
 *        description: user updated
 *      400: 
 *        description: Your request gives error
 */

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *    summary: delete a user
 *    tags: [User]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: the user id
 *        schema: 
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: user delete
 *      404: 
 *        description: OOPS! Not Found
 */

//Login
/**
 * @swagger
 * /users:
 *   post:
 *    description: Login
 *    summary: login user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schema/Login'
 *    responses:
 *      200:
 *        description: Access
 *      403:
 *        description: You don't have permission to access
 *      400:
 *        description: Invalid Access
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