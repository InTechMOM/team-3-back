import User from '../../../models/users.js'


const renderUsers = async (req, res, error) => {
  console.log(req.query.email);
  if(req.query.email){
    const users = await User.find({email: req.query.email}).exec();
    return res.json(users);
  };
  const user = await User.find().lean()
  return res.json(user)
};

const getByName =  async(req,res) =>{
  try {
    const {name} = req.query;
    console.log(name);
    const studentFound = await User.find({name});
    console.log(studentFound);
    if(!studentFound.length) {
      return res.status(404).json({message: "OOPS! Not Found"});
    }
    res.status(200).json(studentFound)  
    
  } catch (error) {
    res.status(500).json('Internal Server Error')  
  }
};

export {renderUsers, getByName};