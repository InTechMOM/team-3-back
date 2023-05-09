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

//Read by id
const renderUserEdit = async (req, res, error) => {

  try {
    const user = await User.exists({email: req.body.email});
    res.json("edit", {user: user});
  }catch (error) {
    console.log(error.message);
  }
};

const userToggleDone = async (req, res, error) => {

  const {id} = req.params;
  
  const user = await User.findById(id);
  
  user.done = !user.done;

  await user.save();

  res.send('saved');
  //se puede realizar una sola consulta, cuando tenga el registro se valida si existe fue evaluado y si 
  //no aparece no está calificado
}

export {renderUsers, renderUserEdit, userToggleDone};