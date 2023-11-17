const router = require('express').Router();
const { Post } = require('../models');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a single post by id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'No post with this id!' });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST a new post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT to update a post by id
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: 'No post with this id!' });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE a post by id
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'No post with this id!' });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
