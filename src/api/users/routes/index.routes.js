import { Router } from 'express'
import validateCreation  from '../validation/post.js'

import { 
  renderUserEdit, 
  renderUsers, 
  userToggleDone 
} from '../controllers/get.js';

import createUser from '../controllers/post.js';
import editUser from '../controllers/put.js';
import deleteOne from '../controllers/del.js'

const router = Router()

//Create User
router.get('/users', renderUsers);
router.post('/users', validateCreation, createUser);

//Login
router.post('/user/login')

// Update by id
router.get('/user',renderUserEdit);
router.put('/user/:id/edit', editUser);

//Delete User by id
router.delete('/user/:id/delete', deleteOne)

//Toggle Done
router.get('/user/:id/toggleDone', userToggleDone);

export default router;