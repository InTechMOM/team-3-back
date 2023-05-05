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
    lowercase: true, 
    sparse: true,
    require: true
  },
  rol: {  
    type: Array,
    default : ['student', 'teacher'],
    require: true
  },
  
},{
  timestamps: true,
  versionKey: false,
});

export default model('User', userShema);
