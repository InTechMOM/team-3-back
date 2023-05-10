import User from '../../models/users.js'

//consulta filtando por el correo, reutilizando 
const getUserBy = async (filter) => {

  const studentFound = await User.find(filter);
  console.log(studentFound)};

export default getUserBy;
