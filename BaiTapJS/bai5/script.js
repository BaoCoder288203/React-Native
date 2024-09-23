// const Dolphins = [44, 23 ,71]
// const Koalas = [65, 54 ,49]

const Dolphins = [85, 54,41]
const Koalas = [23, 34 , 27]

function calcAverage(team) {
    var sum = 0
    team.map((score) => {
        sum += score
    })
    var avg = sum / team.length
    return avg
}

const dolphinsAvg = calcAverage(Dolphins)
const koalasAvg = calcAverage(Koalas)

function checkWinner(dolphinsAvg,koalasAvg) {
    if(dolphinsAvg >= koalasAvg * 2 ){
        console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`)
    }else if(koalasAvg >= dolphinsAvg * 2){
        console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`)
    }else{
        console.log('Not have winner!');
    }
}
checkWinner(dolphinsAvg,koalasAvg)