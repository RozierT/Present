const router = require('express').Router();
const { Comment } = require('../models');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments); 
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a single comment by id
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'No comment with this id!' });
    }
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE a comment by id
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'No comment with this id!' });
    }
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
