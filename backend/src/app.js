require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/db');
const swaggerSpecs = require('./config/swagger');
const errorHandler = require('./middlewares/error.middleware');
const { apiLimiter } = require('./middlewares/rateLimit.middleware');

// Route imports
const authRoutes = require('./routes/auth.routes');
const coursesRoutes = require('./routes/courses.routes');
const enrollmentsRoutes = require('./routes/enrollments.routes');
const progressRoutes = require('./routes/progress.routes');
const recommendRoutes = require('./routes/recommend.routes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(apiLimiter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'SkillForge Backend is running!' });
});

// Swagger Docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/enrollments', enrollmentsRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/quiz', progressRoutes);
app.use('/api/recommendations', recommendRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 SkillForge Backend running on http://localhost:${PORT}`);
  console.log(`📖 Swagger Docs: http://localhost:${PORT}/api/docs`);
});
