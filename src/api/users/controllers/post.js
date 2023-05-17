import User from '../../../models/users.js'


/**
 * @openapi
 * /user:
 *   post:
 *     description: Creation API for users
 *     responses:
 *       200:
 *         description: User created
 *       400:
 *        description: Bad request
 */
const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).json(`${user} Created`);
  } catch (error){
    console.log(error);
    res.status(400).json({message: 'Your request gives error'});
  }
};

//Login
const UserLogin = async (req, res, error) => {

  try {
    const user = await User.exists({email: req.body.email, rol:req.body.rol});
    console.log(user)
    if(!user){
      return res.status(403).json({message: "You don't have permission to access"})
    }
    res.status(200).json({message: 'Access'});
  }catch (error) {
    res.status(400).json({message: 'Invalid Access'})
  }
};


export {
  createUser, 
  UserLogin
};