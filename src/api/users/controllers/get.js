import User from '../../../models/users.js'
import getUserBy from '../helpers.js';


const renderUsers = async (req, res, error) => {
  try {
    if(req.query.email){
      const users = await User.find({email: req.query.email}).exec();
      return res.json(users);
    };
    const user = await User.find().lean()
    return res.json(user)
    
  } catch (error) {
    res.status(500).json('Internal Server Error')  
  }
};

const getByName =  async(req,res) =>{
  try {
    const {name} = req.query;
    const studentFound = await getUserBy(name);
    if(!studentFound.length) {
      return res.status(404).json({message: "OOPS! Not Found"});
    }
    res.status(200).json(studentFound)  
    
  } catch (error) {
    res.status(500).json('Internal Server Error')  
  }
};

const infoUser = async(req, res) => {
  try {
    
  } catch (error) {
    res.json({email: "some@example.com"});
  }
}

export {
  renderUsers, 
  getByName,
  infoUser
};