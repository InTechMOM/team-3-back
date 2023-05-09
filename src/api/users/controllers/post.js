import User from '../../../models/users.js'

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).json(`${user} saved`);
  } catch (error){
    console.log(error);
    res.status(400).json({message: error});
  }
};

export default createUser;