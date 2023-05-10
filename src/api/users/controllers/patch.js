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
        ...lastname && {lastname},  
        ...rol && {rol}
      }
    })
    .then((data) => res.status(201).json('Created'))
    .catch((error) => res.status(400).json({message: 'Your request gives error'}));
  
};

export default editUser;