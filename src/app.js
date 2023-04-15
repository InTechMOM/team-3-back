import mongoose from 'mongoose';
import express from 'express';
import { port, db_uri } from './config/index.js';

const app = express();

app.get('/', (request, response, error) => {

    response.send('status: ok')

})

//Database connection
mongoose
  .connect(db_uri)
  .then(() => {console.log('Database connection successful')})
  .catch((error) => {console.error('Database connection error')});

app.listen(port, (error) => {

    if(error){
        console.log('Server errror: Failed')
        process.exit(1)
    }
    
    console.log(`Server listening in port ${port} `)
})

