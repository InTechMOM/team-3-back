import express, { request, response } from 'express';
import indexRoutes from './api/users/routes/index.routes.js';
import { port } from './config/index.js';
import dbConnection from './config/db.js';
import morgan from 'morgan';


const app = express();
dbConnection();

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

/*module.exports = (schema) => {
    return async(request, response, next) => {
        try {
            await schema.validateAsync(request.body);
        } catch (error) {
            response.send(error.messaje)
        }
    };
};*/

// Routes
app.use(indexRoutes)

app.listen(port, (error) => {

    if(error){
        console.log('Server errror: Failed');
        process.exit(1);
    }
    
    console.log(`Server listening in port ${port} `)
})

