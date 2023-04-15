import express from 'express';
import { port } from './config/index.js';

const app = express();

app.get('/', (req, response, error) => {

    response.send('status: ok')

})

app.post('/1', (request, response, error) => {
  response.send('posteando')
})

app.listen(port, (error) => {

    if(error){
        console.log('Server errror: Failed')
        process.exit(1)
    }
    
    console.log(`Server listening in port ${port} `)
})
console.log('puerto', port)