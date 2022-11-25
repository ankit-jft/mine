const arr = [3,4,2,1];

const double = function (arr){
    return 2 * arr;
}

const square = function (arr){
    return arr * arr;
}


const calculate = function (arr,logic){
    const output = [];
    for(let i = 0;i < arr.length;i++){
        output.push(logic(arr[i]));
    }
    return output
}

console.log(calculate(arr,double));
console.log(calculate(arr,square));