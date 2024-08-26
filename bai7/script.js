// Data 1
const teams = [{
    name: 'Dolphin',
    scores: [97, 112, 101]
},
{
    name: 'Koalas',
    scores: [109, 95, 123]
}
]

function averageScore(teams, teamName) {
const team = teams.find(t => t.name === teamName);

if (!team) {
console.log('Team not found');
return;
}
const sumScore = team.scores.reduce((sum, score) => sum + score, 0);
const average = sumScore / team.scores.length;
console.log(average);
return average;
}

function compareTeams() {
let teamDolphin = averageScore(teams, 'Dolphin');
let teamKoalas = averageScore(teams, 'Koalas');
if (teamDolphin >= 100 && teamKoalas >= 100) {
if (teamDolphin > teamKoalas) {
    console.log(`Dolphins winner`);
} else if (teamDolphin === teamKoalas) {
    console.log('Dolphins draw Koalas');
} else {
    console.log('Koalas winner');
}
} else if (teamDolphin < 100 && teamKoalas < 100) {
console.log('Not have winner');
}
}
averageScore(teams, 'Dolphin')
averageScore(teams, 'Koalas')
compareTeams();