const express = require('express');
const router = express.Router();
const { Results } = require('./models'); // Update the path to your models file
const withAuth = require('./withAuth'); // Update the path to your withAuth middleware

// Define your '/savefav' POST route
router.post('/savefav', withAuth, async (req, res) => {
  try {
    const newSearch = await Results.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSearch);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/savefav', withAuth, async (req, res) => {
    try {
        const newSearch = await Results.findAll({
        ...req.body,
        user_id: req.session.user_id,
        });
    
        res.status(200).json(newSearch);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
module.exports = router;
