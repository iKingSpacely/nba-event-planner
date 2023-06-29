const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes'); //change if necessary back to homeRoutes

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
