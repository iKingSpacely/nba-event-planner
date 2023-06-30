




async function fetchTeamGames(teamAbbreviation) {
 
};

async function fetchDate(gameDay) {
  const response = await fetch(schedulesBasic);
  const data = await response.json();

  const gameDates = data.filter(game => game.Day === gameDay);
  return gameDates;
};


const searchTeamFormHandler = async (event) => {
  event.preventDefault();
  const searchTeam = document.querySelector('#team').value.trim();
  const teamGames = fetchTeamGames(searchTeam);
  
  const response = await fetch('/api/search', {
    method: 'POST',
    body: JSON.stringify({team_name: searchTeam})
  })


}

module.exports = { fetchTeamGames, fetchDate };