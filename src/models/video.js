import {Schema, model} from 'mongoose'


const videoSchema = new Schema({

  url: {
    type: String,
    unique: true,
    require: true,
    trim: true,
    maxLength: 2048,
  },
  title: {
    type: String,
    require: true,
    trim: true,
    maxLength: 60,
  },
  studentName: {
    type: Schema.Types.ObjectId,
    require: true,
    trim: true,
  },
  emailStudent: { 
    type: Schema.Types.ObjectId, 
    ref: 'email',
    lowercase: true, 
    sparse: true,
    require: true,
  },
  emailTeacher: { 
    type: Schema.Types.ObjectId, 
    ref: 'email',
    lowercase: true, 
    sparse: true,
    require: true,
  },
  description: {  
    type: String,
    require: true,
    trim: true,
    maxLength: 1060,
  },
  
},{
  timestamps: true,
  versionKey: false,
});

export default model('Video', videoSchema);