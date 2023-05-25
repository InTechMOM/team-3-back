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
      ...description && {description},
    }
    if(!filters){
      return res.status(400).json('Invalid');
    };
    const video = await Video.find(filters).exec();
    console.log(video)
    return res.status(200).json(video)
    
  } catch (error) {
    res.status(500).json('Internal Server Error')  
  }
};

const getByVideo =  async(req,res) =>{
  try {
    const {id} = req.params;
    const videoFound = await findOne({_id: id});
    if(!videoFound) {
      return res.status(404).json({message: "OOPS! Not Found"});
    }
    res.status(200).json(videoFound)  
    
  } catch (error) {
    res.status(500).json('Internal Server Error')  
  }
};



export {renderVideos, getByVideo};