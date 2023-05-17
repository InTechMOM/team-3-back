import Video from '../../../models/video.js'

const editVideo = async (req, res) => {

  const { id } = req.params;
  const {body} = req.body;
  await Video
    .updateOne({
      _id: id
    },{
       $set:
       { ...title && {title}, 
        ...description && {description}
      }
    })
    .then((data) => res.status(201).json('Created'))
    .catch((error) => res.status(400).json({message: 'Your request gives error'}));
  
};

export default editVideo;
