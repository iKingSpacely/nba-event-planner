// const schedulesBasic = "https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/2022?key=49d03c3b1c98473d9319c7319ab5f1dd";

// fetch(schedulesBasic)
//   .then(response => response.json())
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

//     // Do something with the extracted information
//     const eventPop = document.getElementById('resultsPopulate');

//     function populateEvents() {
//         eventPop.innerHTML = '';
      
//         games.forEach((game, index) => { // Add index parameter
//           const { date, day, homeTeam, homeScore, awayTeam, awayScore } = game;
//           const parentID = `accordionFlushExample-${index}`; // Generate a unique ID for each accordion item
      
//           const eventDivEl = document.createElement('div');
//           eventDivEl.className = 'accordion-item';
      
//           eventDivEl.innerHTML = `
//             <div class="accordion-item">
//               <h2 class="accordion-header">
//                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${day}-${index}" aria-expanded="false" aria-controls="${day}-${index}">
//                   ${homeTeam} vs ${awayTeam}
//                 </button>
//               </h2>
//               <div id="${day}-${index}" class="accordion-collapse collapse" data-bs-parent="#${parentID}">
//                 <div class="accordion-body">
//                   Home Team: ${homeTeam}<br>
//                   Home Score: ${homeScore}<br>
//                   Away Team: ${awayTeam}<br>
//                   Away Score: ${awayScore}<br>
//                 </div>
//               </div>
//             </div>`;
      
//           eventPop.appendChild(eventDivEl);
//         });
//       }
      

//     populateEvents();
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });