const router = require('express').Router();
const { Search } = require('../../models');
const withAuth = require('../../utils/auth');
const fetch = require('node-fetch');
require('dotenv').config();
const schedulesBasic = `https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/2022?key=${process.env.API_KEY}`;


//router.get to get the results of teh request




router.post('/savefav', withAuth, async (req, res) => {
  try {
    const newSearch = await Search.create({
      ...req.body,
      user_id: req.session.user_id,
      team_name: req.team_name,
    });

    res.status(200).json(newSearch);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/sportsdata/:teamAbbr', async(req,res)=>{
  const response = await fetch(schedulesBasic);
  const data = await response.json();
  let teamName = req.params.teamAbbr.toUpperCase()

  // Filter games for the specified team
  const teamGames = data.filter(game => game.HomeTeam === teamName || game.AwayTeam === teamName);
  console.log(teamGames);
// res.render('result',{teamGames})
//   return teamGames;
})


//created with tutor on 7/3
// router.get('/', withAuth, async (req, res) => {
//   const sportTeamData = await Results.findAll().catch((err) => {
//       res.json(err)
//   })
//        const results = sportTeamData.map((result) => result.get({ plain:true}))
//        res.render('teamsearch', { results })
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
