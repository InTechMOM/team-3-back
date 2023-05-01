import express from 'express';
import indexRoutes from './api/users/routes/index.routes.js';
import { port } from './config/index.js';
import dbConnection from './config/db.js';
import morgan from 'morgan';


const app = express();
dbConnection();

//middlewares
app.use(morgan('dev'));

// Routes
app.use(indexRoutes)

app.listen(port, (error) => {

    if(error){
        console.log('Server errror: Failed');
        process.exit(1);
    }
    
    console.log(`Server listening in port ${port} `)
})

