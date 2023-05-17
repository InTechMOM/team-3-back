import { Router } from 'express'
import {
  validateCreation,
  validatePatch,
  validateLogin}  from '../validation/post.js'

import {  
  renderUsers,
  getByName,
  infoUser,
} from '../controllers/get.js';

import {
  createUser, 
  UserLogin
} from '../controllers/post.js';
import editUser from '../controllers/patch.js';
import deleteOne from '../controllers/delete.js'
import { requireToken } from '../middelware/requireToken.js';

const router = Router()

//Users
router
  .get('/users', renderUsers)
  .get('/user',getByName)
  .post('/users', validateCreation, createUser)
  .patch('/user/:id', validatePatch, editUser)
  .delete('/user/:id', validateCreation, deleteOne)
  
  //Login
  .get('/protected', requireToken ,infoUser)
  .post('/login', validateLogin, UserLogin);


export default router;