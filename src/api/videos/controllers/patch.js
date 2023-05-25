import Video from '../../../models/video.js'

const editVideo = async (req, res) => {

  try {
    const { id } = req.params;
    const {title, description} = req.body;
    const video = await Video.updateOne({_id: id},
      {
        $set:
        { ...title && {title}, 
        ...description && {description}
      }
    })
    console.log(video);
    if(!video){
    return res.status(400).json({message: 'Your request gives error'});
    }
    return res.status(201).json('Created');
    
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal Server Error');
  }
  
};

export default editVideo;
