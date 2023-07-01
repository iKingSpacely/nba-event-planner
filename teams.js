// const { Model } = require("sequelize");

const { get } = require("./controllers");

// const Wizards = 1;
// const Hornets = 2;
// const Hawks = 3;
// const Heat = 4;
// const Magic = 5;
// const Knicks = 6;
// const Sixers = 7;
// const Nets = 8;
// const Celtics = 9;
// const Raptors = 10;
// const Bulls = 11;
// const Cavaliers = 12;
// const Pacers = 13;
// const Pistons = 14;
// const Bucks = 15;
// const Timberwolves = 16;
// const Jazz = 17;
// const Thunder = 18;
// const TrailBlazers = 19;
// const Nuggets = 20;
// const Grizzlies = 21;
// const Rockets = 22;
// const Pelicans = 23;
// const Spurs = 24;
// const Mavericks = 25;
// const Warriors = 26;
// const Lakers = 27;
// const Clippers = 28;
// const Suns = 29;
// const Kings = 30;



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
getTeamDetails();

module.exports = {
    Wizards,
    Hornets,
    Hawks,
    Heat,
    Magic,
    Knicks,
    Sixers,
    Nets,
    Celtics,
    Raptors,
    Bulls,
    Cavaliers,
    Pacers,
    Pistons,
    Bucks,
    Timberwolves,
    Jazz,
    Thunder,
    TrailBlazers,
    Nuggets,
    Grizzlies,
    Rockets,
    Pelicans,
    Spurs,
    Mavericks,
    Warriors,
    Lakers,
    Clippers,
    Suns,
    Kings,
};