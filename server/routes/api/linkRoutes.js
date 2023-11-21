const router = require('express').Router();
const { Link } = require('../models');

// GET all links
router.get('/', async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a single link by id
router.get('/:id', async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);
    if (!link) {
      return res.status(404).json({ message: 'No link with this id!' });
    }
    res.json(link);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST a new link
router.post('/', async (req, res) => {
  try {
    const link = await Link.create(req.body);
    res.json(link);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE a link by id
router.delete('/:id', async (req, res) => {
  try {
    const link = await Link.findByIdAndDelete(req.params.id);
    if (!link) {
      return res.status(404).json({ message: 'No link with this id!' });
    }
    res.json(link);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
