import User from '../../../models/users.js'

const editUser = async (req, res) => {

  const { id } = req.params;
  const {name, lastname, email, rol} = req.params;
  await User
    .updateOne({_id: id},{ $set:{ name, lastname, email, rol }})
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json({message: error}));
  //res.status(200).json(`${email} update`)
};

export default editUser;