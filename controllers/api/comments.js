const router = require('express').Router();
const { Comments, User  } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newComments = await Comments.create({ 
      ...req.body, 
      user_id: req.session.user_id
    })
    res.json(newComments)
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post('/', async (req, res) => {
//   try {
//     const { name, date_created, description } = req.body;

//     const user = await Comments.create({ name, date_created, description });

//     if (user) {
//       req.body = user;
//       return res.status(201).json({ message: 'Comment Created' });
//     } else {
//       return res.status(400).json({ message: 'Could not publish comment' });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: 'An error occurred', error });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const commentData = await Comments.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       comments, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/comment/:id', async (req, res) => {
//   try {
//     const commentData = await Comments.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const comments = commentData.get({ plain: true });

//     res.render('comments', {
//       ...comments,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/homepage', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('homepage', { //chnaged from profile
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;
