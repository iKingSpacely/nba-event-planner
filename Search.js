const fetch = require('node-fetch');

const schedulesBasic = `https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/2022?key=${process.env.API_KEY}}`;



async function fetchTeamGames(teamAbbreviation) {
  const response = await fetch(schedulesBasic);
  const data = await response.json();

  // Filter games for the specified team
  const teamGames = data.filter(game => game.HomeTeam === teamAbbreviation || game.AwayTeam === teamAbbreviation);

  return teamGames;
};

async function fetchDate(gameDay) {
  const response = await fetch(schedulesBasic);
  const data = await response.json();

  const gameDates = data.filter(game => game.Day === gameDay);
  return gameDates;
};

module.exports = { fetchTeamGames, fetchDate };