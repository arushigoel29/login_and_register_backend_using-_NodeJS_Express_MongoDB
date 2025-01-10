
const connectDB = require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());


// Connect to Database
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

