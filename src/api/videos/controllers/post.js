import getUserBy from '../../users/helpers.js';
import Video from '../../../models/video.js';

const createVideo = async (req, res) => {
  try {
    const videoToSave = {...req.body};
    console.log('videoToSave 1',videoToSave);
    const teacher = await getUserBy({email: req.body.emailTeacher, rol: 'teacher'});
    const student = await getUserBy({email: req.body.emailStudent, rol: 'student'});
    console.log(teacher, student);

  if(
    !student?.length || 
    !teacher?.length
    ) {
      return res.status(400).json({message: 'Incorrect teacher or student'});
    }
  videoToSave.studentName = student[0].name + ' ' + student[0].lastname;
  console.log('videoToSave 2', videoToSave)

  const video = await Video.create(videoToSave);
  
  return res.status(201).json(`${video} Created`);
  } catch (error){
    console.log(error);
    return res.status(500).json({message: 'Your request gives error'});
  }
};

export default createVideo;