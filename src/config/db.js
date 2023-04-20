import mongoose from 'mongoose';

//Database connection
class database {
  constructor() {
   mongoose
      .connect(db_uri)
      .then(() => {console.log('Database connection successful')})
      .catch((error) => {console.error('Database connection error')});
  }
}

  export { database as default }