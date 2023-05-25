import User from '../../models/users.js'

const getUserBy = async (filter) => {

  const studentFound = await User.find(filter);
  console.log(studentFound);
  return studentFound;
};

export default getUserBy;
