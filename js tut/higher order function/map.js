const radius = [3,4,2,1];

const double = function (arr){
    return 2 * arr;
}

const square = function (arr){
    return arr * arr;
}

Array.prototype.calulate = function (logic){
    const output = [];
    for(let i = 0;i < arr.length;i++){
        output.push(logic(arr[i]));
    }
    return output
}

console.log(arr.map(double));

console.log(arr.calulate(square));