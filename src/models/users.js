import {Schema, model} from 'mongoose'
const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const user = new Schema({

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
  creationDate: { Date, default: Date.toISOString() },
});

export default model('User', user);
