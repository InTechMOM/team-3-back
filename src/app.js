import express, { request, response } from 'express';
import indexRoutes from './api/users/routes/index.routes.js';
import { port } from './config/index.js';
import dbConnection from './config/db.js';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
dbConnection();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use(indexRoutes)

app.listen(port, (error) => {

    if(error){
        console.log('Server errror: Failed');
        process.exit(1);
    }
    
    console.log(`Server listening in port ${port} `)
})

