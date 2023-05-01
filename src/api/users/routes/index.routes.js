import { Router } from 'express'
import User from '../../../models/users.js'


const router = Router()

router.get('/', async (request, response, error) => {

  const user = await User.find().leand()
  //connection with front: response.render("index", {user: user});
  response.send('status: ok');

});

router.post('/login', async (request, response) => {
  const user = User(request.body);

  await user.save();

  response.redirect('/');

});

export default router;