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