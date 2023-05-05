import User from '../../../models/users.js'

export const renderUsers = async (request, response, error) => {
  const user = await User.find().lean()
  //connection with front: response.render("index", {user: user});
  response.send('status: ok')
};

//Get by id
export const renderUserEdit = async (request, response, error) => {

  try {
    const user = await User.findById(request.params.id).lean();
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