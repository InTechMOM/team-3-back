export const requireToken = (req,res,next) =>{
  try {
    const token = req.headers.authorization;
    next();
  } catch (error) {
    console.log(error)
  }
}