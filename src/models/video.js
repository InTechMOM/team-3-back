import {Schema, model} from 'mongoose'


const videoSchema = new Schema({

  url: {
    type: String,
    require: true,
    trim: true,
  },
  title: {
    type: String,
    require: true,
    trim: true,
  },
  nameStudent: {
    type: String,
    require: true,
    trim: true,
  },
  emailTeacher: { 
    type: String, 
    lowercase: true, 
    sparse: true,
    require: true
  },
  description: {  
    type: String,
    require: true,
    trim: true,
  },
  
},{
  timestamps: true,
  versionKey: false,
});

export default model('Video', videoSchema);