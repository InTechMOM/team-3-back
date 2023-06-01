import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MVP IntechMom',
      version: '1.0.0',
    },
    servers:[
      {
      url:'http://localhost:3000',
      url:'https://team-3-back.onrender.com/docs'
      }
    ]
  },
  apis: [
    'app.js',
    './src/api/users/routes/*.js',
    './src/api/videos/routes/*.js',
   ], // files containing annotations as above
};

export const openApiSpecification = swaggerJSDoc(swaggerOptions);