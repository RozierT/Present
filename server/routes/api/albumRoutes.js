const router = require('express').Router();
const { Album } = require('../models');

// GET all albums
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET single album by id
router.get('/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).json({ message: 'No album with this id!' });
    }
    res.json(album);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST a new album
router.post('/', async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.json(album); 
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT to update a album by id
router.put('/:id', async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!album) {
            return res.status(404).json({ message: 'No album with this id!' });
        }
        res.json(album);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DELETE to remove a album by id
router.delete('/:id', async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) {
            return res.status(404).json({ message: 'No album with this id!' });
        }
        res.json(album);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Export the router
module.exports = router;
