const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts: posts });
});

// Form to create a new post
router.get('/new', (req, res) => {
    res.render('forum');
});

// Create a new post
router.post('/new', async (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.redirect('/forum');
});

module.exports = router;