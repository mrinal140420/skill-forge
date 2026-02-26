const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn('⚠️  MONGODB_URI not set - Database features will be limited');
      console.warn('   To use MongoDB, set MONGODB_URI in .env file');
      console.warn('   Get a free cluster at https://www.mongodb.com/cloud/atlas');
      return;
    }
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✓ Connected to MongoDB');
  } catch (error) {
    console.warn('⚠️  MongoDB connection failed:', error.message);
    console.warn('   Running in demo mode - API endpoints will not work fully');
    console.warn('   Update MONGODB_URI in .env with your MongoDB connection string');
  }
};

module.exports = connectDB;
