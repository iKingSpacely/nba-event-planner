
const schedulesBasic = "https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/2022?key=49d03c3b1c98473d9319c7319ab5f1dd";


fetch(schedulesBasic)
.then(response => response.json())
  .then(data => {
    // Extract date, home team, and away team information
    const games = data.map(game => {
      const date = game.DateTime;
      const day = game.Day;
      const homeTeam = game.HomeTeam;
      const homeScore = game.HomeTeamScore; 
      const awayTeam = game.AwayTeam;
      const awayScore = game.AwayTeamScore; 
      
      return { date, day, homeTeam, homeScore, awayTeam, awayScore };
    });

    // Do something with the extracted information
    console.log(games);
    const teamGames = games.filter(game => (game.homeTeam === "MIL" || game.awayTeam === "MIL"))
    console.log(teamGames);
  })
  .catch(error => {
    console.log('Error:', error);
  });


=======
var nbaAPI = "https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/2023-06-01?key=49d03c3b1c98473d9319c7319ab5f1dd";


function gatherAPI() {
    // event.preventDefault();
    console.log(nbaAPI);
    fetch(nbaAPI)
        .then(function (response) {
            console.log(response.json());
            // return response.json();
            return;
            
        }); 
   
}

gatherAPI();

