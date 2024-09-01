const mongoose = require('mongoose'); // Import Mongoose

// Define the schema for a Post
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Post model based on the schema
module.exports = mongoose.model('Post', postSchema);