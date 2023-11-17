const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const albumRoutes = require('./albumRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/albums', albumRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;