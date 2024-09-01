const express = require('express'); // Import the Express library
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const bodyParser = require('body-parser'); // Import Body-Parser to handle form data
const app = express(); // Create an Express application

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/forumDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static('public')); // Serve static files from the "public" directory
app.set('view engine', 'ejs'); // Set EJS as the templating engine

// Routes
const forumRoutes = require('./routes/forum'); // Import forum routes
app.use('/', forumRoutes); // Use the forum routes for all root requests

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});