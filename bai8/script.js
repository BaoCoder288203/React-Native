var bills = [125, 555 ,44]
var tips = []

function calcTip (bills) {
    bills.map(bill => {
        if(bill >= 50 && bill <= 300){
            tips.push(0.15 * bill)
        }else{
            tips.push(0.20 * bill)
        }
    })
    console.log(tips);
    return tips;
}

var newTips = calcTip(bills)

function calcAverage(bills) {
    bills.reduce((sum,valuePre)=>(sum + valuePre),0)
}

function totals(bills,tips) {
    var total = []
    for (let i = 0; i < bills.length; i++) {
        total.push(bills[i] + tips[i]);
    }
    console.log("Average bills: " + calcAverage(bills));
    console.log(total);
}
totals(bills,newTips)