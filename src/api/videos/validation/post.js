import Joi from 'joi'

const createVideoSchema =  Joi.object({
  url: Joi.string()
    .uri()
    .label("Intro Video")
    .required()
    .allow('')
    .min(3)
    .max(2048),  
  title: Joi.string()
    .required()
    .min(3)
    .max(60),
  studentName: Joi.string()
  .required()
  .min(3)
  .max(60),
  studentEmail: Joi.string()
    .email()
    .required(),
  teacherEmail: Joi.string()
    .email()
    .required(),
  description: Joi.string()
    .required()
    .min(3)
    .max(250),
});

const patchUserSchema = Joi.object({
  title: Joi.string()
    .required()
    .min(3)
    .max(60),
    description: Joi.string()
    .required()
    .min(3)
    .max(250),
});

const validateVideo = async(request, response, next) => {
  await createVideoSchema.validate(request.body);
  next();
  try { 
  } catch (error) {
    response.status(400).send('Unvalidated')
  }
};

const validatePatch = async(request, response, next) => {
  await patchUserSchema.validate(request.body);
  next();
  try { 
  } catch (error) {
    response.send(error);
  }
}

export {
  validateVideo,
  validatePatch,
};