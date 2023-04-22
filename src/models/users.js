const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


const userSchema = new Schema({

  name: String,
  lastname: String,
  email: { String, unique:true, lowercase: true },
  rol: String,
  creationDate: { Date, default: Date.toString() },

});

module.exports = mongoose.model('User', userSchema)