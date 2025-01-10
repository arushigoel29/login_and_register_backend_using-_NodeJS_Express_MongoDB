const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/loginDB');
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
    }
  };
  module.exports = connectDB;
