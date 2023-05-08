import User from '../../../models/users.js'

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.json(`${user} saved`);
  } catch (error){
    console.log(error);
    res.json({message: error});
  }
};

const editUser = async (req, res) => {

  const { id } = req.params;
  const {name, lastname, email, rol} = req.params;
 /* await User
    .updateOne({_id: id},{ $set:{ name, lastname, email, rol }})
    .then(data) => res.json(data)
    .catch(error) => res.json(data)*/
  res.statusCode(200).json(`${email} update`)
}


const deleteOne = async(req,res) => {
  const { id } = req.params;
  const removed = await User.findByIdAndDelete(id);
  console.log(removed);
  res.json(`${removed} delete from database`)
};

export  {createUser, editUser, deleteOne}