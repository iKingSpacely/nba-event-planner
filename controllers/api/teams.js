const express = require('express');
const router = express.Router();
const { fetchTeamGames } = require('../models/Search'); // import search model

// team routes
function getTeamDetails(teamNumber) {
    switch (teamNumber) {
        case 1: return { fullName: "Washington Wizards", city: "Washington", abbreviation: "WAS"};
        case 2: return { fullName: "Charlotte Hornets", city: "Charlotte", abbreviation: "CHA"};
        case 3: return { fullName: "Atlanta Hawks", city: "Atlanta", abbreviation: "ATL"};
        case 4: return { fullName: "Miami Heat", city: "Miami", abbreviation: "MIA"};
        case 5: return { fullName: "Orlando Magic", city: "Orlando", abbreviation: "ORL"};
        case 6: return { fullName: "New York Knicks", city: "New York", abbreviation: "NYK"};
        case 7: return { fullName: "Philadelphia 76ers", city: "Philadelphia", abbreviation: "PHI"};
        case 8: return { fullName: "Brooklyn Nets", city: "Brooklyn", abbreviation: "BKN"};
        case 9: return { fullName: "Boston Celtics", city: "Boston", abbreviation: "BOS"};
        case 10: return { fullName: "Toronto Raptors", city: "Toronto", abbreviation: "TOR"};
        case 11: return { fullName: "Chicago Bulls", city: "Chicago", abbreviation: "CHI"};
        case 12: return { fullName: "Cleveland Cavaliers", city: "Cleveland", abbreviation: "CLE"};
        case 13: return { fullName: "Indiana Pacers", city: "Indiana", abbreviation: "IND"};
        case 14: return { fullName: "Detroit Pistons", city: "Detroit", abbreviation: "DET"};
        case 15: return { fullName: "Milwaukee Bucks", city: "Milwaukee", abbreviation: "MIL"};
        case 16: return { fullName: "Minnesota Timberwolves", city: "Minnesota", abbreviation: "MIN"};
        case 17: return { fullName: "Utah Jazz", city: "Utah", abbreviation: "UTA"};
        case 18: return { fullName: "Oklahoma City Thunder", city: "Oklahoma City", abbreviation: "OKC"};
        case 19: return { fullName: "Portland Trail Blazers", city: "Portland", abbreviation: "POR"};
        case 20: return { fullName: "Denver Nuggets", city: "Denver", abbreviation: "DEN"};
        case 21: return { fullName: "Memphis Grizzlies", city: "Memphis", abbreviation: "MEM"};
        case 22: return { fullName: "Houston Rockets", city: "Houston", abbreviation: "HOU"};
        case 23: return { fullName: "New Orleans Pelicans", city: "New Orleans", abbreviation: "NOP"};
        case 24: return { fullName: "San Antonio Spurs", city: "San Antonio", abbreviation: "SAS"};
        case 25: return { fullName: "Dallas Mavericks", city: "Dallas", abbreviation: "DAL"};
        case 26: return { fullName: "Golden State Warriors", city: "San Francisco", abbreviation: "GSW"};
        case 27: return { fullName: "Los Angeles Lakers", city: "Los Angeles", abbreviation: "LAL"};
        case 28: return { fullName: "Los Angeles Clippers", city: "Los Angeles", abbreviation: "LAC"};
        case 29: return { fullName: "Phoenix Suns", city: "Phoenix", abbreviation: "PHX"};
        case 30: return { fullName: "Sacramento Kings", city: "Sacramento", abbreviation: "SAC"};
        default: return { fullName: "Unknown team", city: "Unknown city", abbreviation: "UNK"};
    }
}

router.get('/api/team/:teamNumber', (req, res) => {  
    const teamNumber = parseInt(req.params.teamNumber);
    const teamDetails = getTeamDetails(teamNumber);
    res.json(teamDetails);
});

// New endpoint for fetching team games
router.get('/api/games/:teamNumber', async (req, res) => {
    const teamNumber = parseInt(req.params.teamNumber);
    const teamDetails = getTeamDetails(teamNumber);

    try {
        const games = await fetchTeamGames(teamDetails.abbreviation);
        res.json(games);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching games.');
    }
});



