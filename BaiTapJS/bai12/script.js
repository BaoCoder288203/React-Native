document.addEventListener('DOMContentLoaded', function() {

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scorers:{
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
    },
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1,players2] = game.players;

const [gk,...fieldsPLayers] = players1;

const  allPlayers = [...players1,...players2];

const players1Final = [...players1,'Thiago', 'Coutinho' ,'Perisic'];

const {team1, x ,team2} = game.odds;

function printGoals(...players){
    console.log(`${players.length} goals were scored by: `);
    players.forEach(player => console.log(player));
}

printGoals(...game.scored);

const likelyWinner =  team1 < team2 && team1 < x ? game.team1 : game.team2;

console.log(`The team more likely to win is ${likelyWinner}`);

const scoreds = game.scored;

scoreds.forEach((player,index) => console.log(`Bàn thắng ${index+1}: ${player}`));

let sum = 0;
let count = 0;

for (const odd of Object.values(game.odds)) {
    sum += odd; 
    count++;    
}

const averageOdd = sum / count;  
console.log(`The average odd is ${averageOdd.toFixed(2)}`);

console.log(`Tỷ lệ cược chiến thắng ${game.team1}: ${team1}`);
console.log(`Tỷ lệ cược hòa: ${x}`);
console.log(`Tỷ lệ cược chiến thắng ${game.team2}: ${team2}`);



})
