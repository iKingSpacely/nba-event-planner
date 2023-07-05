console.log('Script running');

// Target the save button elements using a common class
let saveButtons = document.querySelector('.save-btn');
console.log(saveButtons);

saveButtons.addEventListener('click', async (event) => {
    console.log(event.target.dataset);
    let el = event.target.dataset
    const favData = {
        home_team: el.homeTeam,
         home_score: el.homeScore,
         away_team:el.awayTeam,
         away_score: el.awayScore,
         date_time: el.dateTime,
         day: el.day}
         console.log(favData);

    

          
                const response = await fetch('/api/result/savefav', {
                  method: 'POST',
                  body: JSON.stringify(favData),
                  headers: { 'Content-Type': 'application/json' },
                });
            
                if (response.ok) {
                  document.location.replace('/profile');
                } else {
                  alert('Failed to sign up');
                }
            
})


