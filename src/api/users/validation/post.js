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
  rol: Joi.array()
    .items(Joi.string().valid('student', 'teacher'))
    .required(),
})

const updatePeopleSchema =  Joi.object({
  email: Joi.string()
    .email()
    .required(),
  rol: Joi.string()
    .valid('teacher','student')
    .required(),
})


const validateCreation = async(request, response, next) => {
  await createUserSchema.validate(request.body);
  next();
  try { 
  } catch (error) {
    response.send(error);
  }
}

export default validateCreation;