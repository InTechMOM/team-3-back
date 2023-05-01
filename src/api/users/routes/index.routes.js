import { Router } from 'express'
import User from '../../../models/users.js'


const router = Router()

router.get('/', async (request, response, error) => {

  const user = await User.find().leand();
  //connection with front: response.render("index", {user: user});
  response.send('status: ok');

});

router.post('/login', async (request, response) => {
  try {
    const user = User(request.body);
    await user.save();
    response.redirect('/');
  } catch (error){
    console.log(error);
  }
});

// Update by id
router.get('/edit/:id', async (request, response, error) => {

  try {
    const user = await User.findById(request.params.id).lean();
  //connection with front: response.render("edit", {user: user});}
  } catch (error) {
    console.log(error.message);
  }
  
});

router.post('/edit/:id', async (request, response) =>{

  const {id} = request.params;
  await User.findByIdAndUpdate(id, request.body);
  response.redirect('/');
})

export default router;