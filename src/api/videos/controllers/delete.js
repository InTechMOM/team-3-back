import Video from '../../../models/video.js'

const deleteOneVideo = async(req,res) => { 
  try {
    const { id } = req.params;
    const removed = await Video.findByIdAndDelete(id);
    console.log(removed);
    res.status(200).json(`${removed} delete from database`);
  } catch (error) {
    res.status(404).json({menssage: error})
  }
};

export default deleteOneVideo;