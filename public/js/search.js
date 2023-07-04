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

            // Add the new data
            data.forEach(game => {
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

            // Add the new data
            data.forEach(game => {
                var h1 = document.createElement('h1');
                h1.textContent = game.Day;
                sportsDataDiv.appendChild(h1);
            });
        });
});