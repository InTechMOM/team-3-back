import express from 'express';
import { port } from './config/index.js';
import Database from './config/db.js';

const app = express();
const db = new Database();

app.get('/', (request, response, error) => {

    response.send('status: ok')

})

app.listen(port, (error) => {

    if(error){
        console.log('Server errror: Failed')
        process.exit(1)
    }
    
    console.log(`Server listening in port ${port} `)
})

