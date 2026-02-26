const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SkillForge CSE Courses Portal API',
      version: '1.0.0',
      description: 'Professional learning portal for Computer Science Engineering courses with real authentication, persistent data, and ML-powered recommendations.',
      contact: {
        name: 'SkillForge Team',
      },
    },
    servers: [
      {
        url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}`,
        description: 'Frontend',
      },
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            email: { type: 'string' },
            role: { type: 'string', enum: ['STUDENT', 'ADMIN'] },
            createdAt: { type: 'string', format: 'date-time' },
            lastActivityAt: { type: 'string', format: 'date-time' },
          },
        },
        Course: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            title: { type: 'string' },
            slug: { type: 'string' },
            category: { type: 'string' },
            level: { type: 'string', enum: ['Beginner', 'Intermediate', 'Advanced'] },
            durationHours: { type: 'number' },
            rating: { type: 'number' },
            thumbnailUrl: { type: 'string' },
            description: { type: 'string' },
            tags: { type: 'array', items: { type: 'string' } },
            syllabusModules: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  contentType: { type: 'string', enum: ['video', 'text'] },
                  durationMin: { type: 'number' },
                },
              },
            },
          },
        },
        Token: {
          type: 'object',
          properties: {
            token: { type: 'string' },
            user: { $ref: '#/components/schemas/User' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
