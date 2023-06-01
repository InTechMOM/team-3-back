import express, { request, response } from 'express';
import swaggerUi from 'swagger-ui-express';
import indexRoutes from './api/users/routes/index.routes.js';
import indexRoutesVideo from './api/videos/routes/index.js';
import { port } from './config/index.js';
import dbConnection from './config/db.js';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { openApiSpecification } from './config/swagger.js';

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

dbConnection();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// Routes
app.use(
    indexRoutes, 
    indexRoutesVideo
    );

// Swagger
app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(openApiSpecification));


app.listen(port, (error) => {

    if(error){
        console.log('Server errror: Failed');
        process.exit(1);
    }
    
    console.log(`Server listening in port ${port} `)
})

