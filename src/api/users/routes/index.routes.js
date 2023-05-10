import { Router } from 'express'
import {
  validateCreation,
  validateLogin}  from '../validation/post.js'

import {  
  renderUsers,
  getByName 
} from '../controllers/get.js';

import {
  createUser, 
  UserLogin
} from '../controllers/post.js';
import editUser from '../controllers/patch.js';
import deleteOne from '../controllers/delete.js'

const router = Router()

//User
router.get('/users', renderUsers);
router.post('/users', validateCreation, createUser);
router.patch('/user/:id', validateCreation, editUser);
router.delete('/user/:id', validateCreation, deleteOne)

//Login
router.post('/user/login', validateLogin, UserLogin);

router.get('/user',getByName);

export default router;