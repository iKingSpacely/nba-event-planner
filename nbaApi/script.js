

// const schedulesBasic = "https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/2022?key=49d03c3b1c98473d9319c7319ab5f1dd";


// fetch(schedulesBasic)
// .then(response => response.json())
//   .then(data => {
//     // Extract date, home team, and away team information
//     const games = data.map(game => {
//       const date = game.DateTime;
//       const day = game.Day;
//       const homeTeam = game.HomeTeam;
//       const homeScore = game.HomeTeamScore; 
//       const awayTeam = game.AwayTeam;
//       const awayScore = game.AwayTeamScore; 
      
//       return { date, day, homeTeam, homeScore, awayTeam, awayScore };
//     });


    // Do something with the extracted information
//     console.log(games);
//     const teamGames = games.filter(game => (game.homeTeam === "MIL" || game.awayTeam === "MIL"))
//     let searchBody = document.createElement('div');
//     let homeTeam = document.createElement('p');
//     let awayTeam = document.createElement('p');
//     let homeScore = document.createElement('p');
//     let awayScore = document.createElement('p');
//     let date = document.createElement('p');
//     let day = document.createElement('p');
//     searchBody.appendChild(awayTeam, homeTeam, homeScore, awayScore, date, day);
//     searchBody.setAttribute('class', 'pb-5');
//     console.log(teamGames);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });

// module.exports = schedulesBasic;

//     // Do something with the extracted information
//     console.log(games);
//     const teamGames = games.filter(game => (game.homeTeam === "MIL" || game.awayTeam === "MIL"))
//     let searchBody = document.createElement('div');
//     let homeTeam = document.createElement('p');
//     let awayTeam = document.createElement('p');
//     let homeScore = document.createElement('p');
//     let awayScore = document.createElement('p');
//     let date = document.createElement('p');
//     let day = document.createElement('p');
//     console.log(teamGames);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });


// module.exports = { 
//   games: games 
// };
const express = require('express');
const fetch = require('node-fetch'); // You'll need to install this package, since `fetch` isn't available in Node.js by default
const router = require('../controllers');
const app = express();

router.get('/api/result/sportsdata/:team', async (req, res) => {
  const team = req.params.team.toUpperCase();

  const schedulesBasic = "https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/2022?key=49d03c3b1c98473d9319c7319ab5f1dd";

  try {
    const response = await fetch(schedulesBasic);
    const data = await response.json();

    const games = data.map(game => {
      const date = game.DateTime;
      const day = game.Day;
      const homeTeam = game.HomeTeam;
      const homeScore = game.HomeTeamScore; 
      const awayTeam = game.AwayTeam;
      const awayScore = game.AwayTeamScore; 

      return { date, day, homeTeam, homeScore, awayTeam, awayScore };
    });

    const teamGames = games.filter(game => (game.homeTeam === team || game.awayTeam === team));

    // Here we just send the result as JSON. You would use your existing logic
    // to format the results the way you want.
    console.log('team:', team);
    console.log('games:', games);
    console.log('teamGames:', teamGames);
    res.json(teamGames);

  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching sports data.' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

