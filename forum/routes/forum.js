const express = require('express'); // Import Express
const router = express.Router(); // Create a router object
const Post = require('../models/Post'); // Import the Post model

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find(); // Fetch all posts from the database
    res.render('index', { posts: posts }); // Render the index view with the posts
});

// Form to create a new post
router.get('/new', (req, res) => {
    res.render('forum'); // Render the form for creating a new post
});

// Create a new post
router.post('/new', async (req, res) => {
    const { title, content, author } = req.body; // Extract form data from the request body
    const newPost = new Post({ title, content, author }); // Create a new Post object
    await newPost.save(); // Save the post to the database
    res.redirect('/'); // Redirect to the homepage after saving
});

// View a specific post
router.get('/post/:id', async (req, res) => {
    const post = await Post.findById(req.params.id); // Find the post by ID
    res.render('post', { post: post }); // Render the post view with the found post
});

module.exports = router; // Export the router so it can be used in app.js