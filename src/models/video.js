import {Schema, model} from 'mongoose'


const videoSchema = new Schema({

  url: {
    type: String,
    require: true,
    trim: true,
    max: 2048,
  },
  title: {
    type: String,
    require: true,
    trim: true,
    max: 60,
  },
  nameStudent: {
    type: Schema.Types.ObjectId,
    ref: 'name',
    require: true,
    trim: true,
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
    max: 1060,
  },
  
},{
  timestamps: true,
  versionKey: false,
});

export default model('Video', videoSchema);