import Joi from 'joi'


const createUserSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .max(24),
  lastname: Joi.string()
    .required()
    .min(3)
    .max(24),
  email: Joi.string()
    .email()
    .required(),
  rol: Joi.string()
    .valid('student', 'teacher')
    .required(),
});

const patchUserSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .max(24),
  lastname: Joi.string()
    .required()
    .min(3)
    .max(24)
});

const loginUserSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  rol: Joi.string()
    .valid('student', 'teacher')
    .required(),
});

const validateCreation = async(request, response, next) => {
  await createUserSchema.validate(request.body);
  next();
  try { 
  } catch (error) {
    response.send(error);
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

const validateLogin = async(request, response, next) => {
  await loginUserSchema.validate(request.body);
  next();
  try { 
  } catch (error) {
    response.send(error);
  }
};




export {
  validateCreation, 
  validatePatch,
  validateLogin,
};