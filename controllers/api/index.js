const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comments');

const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
router.use('/search', searchRoutes);

const resultRoutes = require('./resultRoutes');

router.use('/users', userRoutes);
router.use('/result', resultRoutes);

router.use('/comments', commentRoutes);



module.exports = router;