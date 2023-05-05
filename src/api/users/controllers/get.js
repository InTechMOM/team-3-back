import User from '../../../models/users.js'

export const renderUsers = async (request, response, error) => {
  console.log(request.query.email);
  if(request.query.email){
    const users = await User.find({email: request.query.email}).exec();
    return response.send(users);
  };
  const user = await User.find().lean()
  return response.send(user)
};

//Get by id
export const renderUserEdit = async (request, response, error) => {

  try {
    const user = await User.exists({email: request.body.email});
  //connection with front: response.render("edit", {user: user});}
  } catch (error) {
    console.log(error.message);
  }
  
};

export const userToggleDone = async (request, response, error) => {

  const {id} = request.params;
  
  const user = await User.findById(id);
  
  user.done = !user.done;

  await user.save();

  response.redirect('/');
  //se puede realizar una sola consulta, cuando tenga el registro se valida si existe fue evaluado y si 
  //no aparece no está calificado
}