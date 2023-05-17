import { query } from 'express';
import Video from '../../../models/video.js'

const renderVideos = async (req, res, error) => {
  try {
    const { 
      title,
      studentName,
      emailStudent,
      emailTeacher,
     } = req.query;
    const filters ={
      ...title && {title},
      ...studentName && {studentName},
      ...emailStudent && {emailStudent},
      ...emailTeacher && {emailTeacher},
    }
    if(!filters){
      return res.status(400).json('Invalid');
    };
    const video = await Video.find(filters).exec();
    return res.status(200).json(`${video} status: ok`)
    
  } catch (error) {
    res.status(500).json('Internal Server Error')  
  }
};


export default renderVideos;