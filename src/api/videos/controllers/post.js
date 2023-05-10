import getUserBy from "../../users/helpers.js";
import validateVideo from "../validation/post.js";

const createVideo = async (req, res) => {
  try {
    const videoToSave = {...req.body};
    const teacher = await getUserBy({email: req.body.emailTeacher, rol: 'teacher'});
    const student = await getUserBy({email: req.body.emailStudent, rol: 'student'});
    console.log(teacher, student);

  if(!student?.length || !teacher?.length){
      return res.status(400).json({message: 'Teacher or student incorrect'});
  }
    //    const video = await Video.create(req.body);
  res.status(201).json(`${videoToSave} Created`);
  } catch (error){
    console.log(error);
    res.status(400).json({message: 'Your request gives error'});
  }
};

//se consulta el id del profesor 
//...req.body} objeto que tenga todos los datos de la request
export default createVideo;