import Joi from 'joi'

const createVideoSchema =  Joi.object({
  url: Joi.string()
    .required(),
  title: Joi.string()
    .required()
    .min(3)
    .max(60),
    nameStudent: Joi.string()
    .required()
    .min(3)
    .max(24),
    emailTeacher: Joi.string()
    .email()
    .required(),
    description: Joi.string()
      .required()
      .min(3)
      .max(250),
})

const validateVideo = async(request, response, next) => {
  await { createVideoSchema}.validate(request.body);
  next();
  try { 
  } catch (error) {
    response.send(error);
  }
}

export default validateVideo;