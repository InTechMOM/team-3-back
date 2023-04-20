import express from 'express';
import { port } from './config/index.js';
import database from './config/db.js';

const app = express();

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

