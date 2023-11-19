const router = require('express').Router();
const { Profile } = require('../models');

// GET all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET a single profile by id
router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: 'No profile with this id!' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST a new profile
router.post('/', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT to update a profile by id
router.put('/:id', async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true }
    );
    if (!profile) {
      return res.status(404).json({ message: 'No profile with this id!' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE a profile by id
router.delete('/:id', async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: 'No profile with this id!' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
