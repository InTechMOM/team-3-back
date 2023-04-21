import mongoose from 'mongoose';
import {db_uri} from './index.js'

//Database connection
class Database {
  constructor() {
    mongoose
      .connect(db_uri)
      .then(() => {console.log('Database connection successful')})
      .catch((error) => {console.error('Database connection error', error)});
  }
}

  export { Database as default }