import { Router } from 'express'
import validateCreation  from '../validation/post.js'

import { 
  renderUserEdit, 
  renderUsers, 
  userToggleDone 
} from '../controllers/get.js';

import { 
  createUser, 
  editUser,
  deleteOne 
} from '../controllers/post.js';

const router = Router()

//Create User
router.get('/users', renderUsers);
router.post('/users', validateCreation, createUser);

//Login
router.post('/user/login')

// Update by id
router.get('/user/:id/edit',renderUserEdit);
router.put('/user/:id/edit', validateCreation, editUser);

//Delete User by id
router.delete('/user/:id/delete', deleteOne)

//Toggle Done
router.get('/user/:id/toggleDone', userToggleDone);

export default router;