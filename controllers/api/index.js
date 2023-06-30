const router = require('express').Router();
const userRoutes = require('./userRoutes');
const resultRoutes = require('./resultRoutes');

router.use('/users', userRoutes);
router.use('/result', resultRoutes);

module.exports = router;