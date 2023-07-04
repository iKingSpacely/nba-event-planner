// document.querySelector('#eastern').addEventListener('click', function () {
//     const team = document.querySelector('#team-select1').value;
//     fetch(`/api/result/sportsdata/${team}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });

// document.querySelector('#western').addEventListener('click', function () {
//     const team = document.querySelector('#team-select2').value;
//     fetch(`/api/result/sportsdata/${team}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });
document.getElementById('eastern').addEventListener('click', function () {
    var team = document.getElementById('team-select1').value.slice(8); // remove 'eastteam'
    fetch('/sportsdata/' + team)
        .then(response => response.json())
        .then(data => {
            // Clear out the old data
            var sportsDataDiv = document.getElementById('sports-data');
            while (sportsDataDiv.firstChild) {
                sportsDataDiv.removeChild(sportsDataDiv.firstChild);
            }

            // Filter the data based on team
            var teamGames = data.filter(game => game.homeTeam === team || game.awayTeam === team);

            // Add the new data
            teamGames.forEach(game => {
                var h1 = document.createElement('h1');
                h1.textContent = game.Day;
                sportsDataDiv.appendChild(h1);
            });
        });
});

document.getElementById('western').addEventListener('click', function () {
    var team = document.getElementById('team-select2').value.slice(8); // remove 'westteam'
    fetch('/sportsdata/' + team)
        .then(response => response.json())
        .then(data => {
            // Clear out the old data
            var sportsDataDiv = document.getElementById('sports-data');
            while (sportsDataDiv.firstChild) {
                sportsDataDiv.removeChild(sportsDataDiv.firstChild);
            }

            // Filter the data based on team
            var teamGames = data.filter(game => game.homeTeam === team || game.awayTeam === team);

            // Add the new data
            teamGames.forEach(game => {
                var h1 = document.createElement('h1');
                h1.textContent = game.Day;
                sportsDataDiv.appendChild(h1);
            });
        });
});