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

//Users
router
  .get('/users', renderUsers)
  .get('/user',getByName)
  .post('/users', validateCreation, createUser)
  .patch('/user/:id', validatePatch, editUser)
  .delete('/user/:id', validateCreation, deleteOne)
  
  //Login
  .post('/login', validateLogin, UserLogin);


export default router;