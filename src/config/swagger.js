import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MVP IntechMom',
      version: '1.0.0',
    },
  },
  apis: [
    'app.js',
    './src/api/users/controllers/post.js'
  ], // files containing annotations as above
};

export const openApiSpecification = swaggerJSDoc(swaggerOptions);