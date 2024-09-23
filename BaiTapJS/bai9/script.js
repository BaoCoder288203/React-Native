
var arr = [17, 21, 23]
var arr1 = [12, 5, -5, 0, 4]

function printForecast(arr) {
    arr.map((item,index)=>{
        console.log(item + "*C" + "in" + index + "days");
    })
}