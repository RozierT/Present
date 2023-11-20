const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const profileRoutes = require('./profileRoutes');
const linkRoutes = require('./linkRoutes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/profiles', profileRoutes);
router.use('/links', linkRoutes);

module.exports = router;