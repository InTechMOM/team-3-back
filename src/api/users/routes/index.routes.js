import { Router } from 'express'
import validateCreation from '../validation/post.js'
//const validateInformation= require('../../../app.js')

import { 
  renderUserEdit, 
  renderUsers, 
  userToggleDone 
} from '../controllers/get.js';

import { 
  createUser, 
  editUser 
} from '../controllers/post.js';

const router = Router()

router.get('/', renderUsers);
router.post('/user/login', validateCreation, createUser);

// Update by id
router.get('/user/:id/edit',renderUserEdit);
router.post('/user/:id/edit', editUser);

//Toggle Done
router.get('/user/:id/toggleDone', userToggleDone);

export default router;