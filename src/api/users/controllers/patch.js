import User from '../../../models/users.js'

const editUser = async (req, res) => {

  const { id } = req.params;
  const {name, lastname, rol} = req.body;
  await User
    .updateOne({
      _id: id
    },{
       $set:
       { ...name && {name}, 
        ...lastname && {lastname}
      }
    })
    .then((data) => res.status(200).json('User updated'))
    .catch((error) => res.status(400).json({message: 'Your request gives error'}));
  
};

export default editUser;