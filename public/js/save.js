console.log('Script running');

// Target the save button elements using a common class
let saveButtons = document.querySelectorAll('.saveButton');

console.log('Found buttons:', saveButtons.length);

// Add a click event listener to each save button
saveButtons.forEach((button, index) => {
    console.log(`Adding event listener to button ${index}`);
    
    button.addEventListener('click', async (event) => {
        console.log(`Button ${index} clicked`);
        
        // Prevent the default action
        event.preventDefault();

        // Gather the data from the data attributes on the button
        let gameData = {
            HomeTeam: button.dataset.homeTeam,
            HomeTeamScore: button.dataset.homeScore,
            AwayTeam: button.dataset.awayTeam,
            AwayTeamScore: button.dataset.awayScore,
            DateTime: button.dataset.dateTime,
        };

        console.log(`Button ${index} data:`, gameData);

        try {
            // Make a POST request to the server
            let response = await fetch('/savefav', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gameData),
            });

            console.log(`Response from button ${index}:`, response);

            // Parse the JSON response from the server
            let newResults = await response.json();

            console.log(`Data from button ${index}:`, newResults);

            // You could do something with newResults here, like update the UI

        } catch (err) {
            console.error('Error:', err);
        }
    });
});
