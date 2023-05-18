import getUserBy from '../../users/helpers.js';
import Video from '../../../models/video.js';

const createVideo = async (req, res) => {
  try {
    const videoToSave = {...req.body};
    console.log(videoToSave);
    const teacher = await getUserBy({email: req.body.emailTeacher, rol: 'teacher'});
    const student = await getUserBy({email: req.body.emailStudent, rol: 'student'});
    console.log(teacher, student);

  if(
    !student?.length || 
    !teacher?.length
    ) {
      return res.status(400).json({message: 'Incorrect teacher or student'});
    }
  const video = await Video.create(req.body);
  console.log(video)
  
  return res.status(201).json(`${video} Created`);
  } catch (error){
    console.log(error);
    return res.status(400).json({message: 'Your request gives error'});
  }
};

export default createVideo;