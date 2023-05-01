import {Schema, model} from 'mongoose'


const userShema = new Schema({

  name: {
    type: String,
    require: true,
    trim: true,
  },
  lastname: {
    type: String,
    require: true,
    trim: true,
  },
  email: { 
    type: String, 
    unique:true, 
    lowercase: true 
  },
  rol: {
    type: String, 
    required: true, 
    enum: ['student', 'teacher']
  },
  
},{
  timestamps: true,
  versionKey: false,
});

export default model('User', userShema);
