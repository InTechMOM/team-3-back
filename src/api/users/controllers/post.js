import User from '../../../models/users.js'

export const createUser = async (request, response) => {
  try {
    const user = User(request.body);
    await user.save();
    response.send('Saved');
  } catch (error){
    console.log(error);
  }
};

export const editUser = async (request, response) =>{

  const { id } = request.params;
  await User.findByIdAndUpdate(id, request.body);
  respose.statusCode(200).send('')
  //permite que front reciba el estado, un mensaje o un objeto, modificar response.redirect
};