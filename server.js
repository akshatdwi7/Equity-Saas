const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const forumRouter = require('./forum/forum'); // Import the forum router

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'forum/views'));

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the forum router for routes starting with /forum
app.use('/forum', forumRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});