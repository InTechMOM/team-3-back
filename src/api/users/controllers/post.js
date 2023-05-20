import User from '../../../models/users.js';


/**
 * @openapi
 * /users:
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
    const user = await User.create(req.body);
    res.status(201).json(`${user} Created`);
  } catch (error){
    res.status(400).json({message: 'Your request gives error'});
  }
};

//Login
const UserLogin = async (req, res, error) => {

  try {
    const user = await User.exists({email: req.body.email, rol:req.body.rol});
    if(!user){
      return res.status(403).json({message: "You don't have permission to access"})
    }

    return res.status(200).json({message: 'Access'});
  }catch (error) {
    console.log(error);
    return res.status(400).json({message: 'Invalid Access'})
  }
};


export {
  createUser, 
  UserLogin
};