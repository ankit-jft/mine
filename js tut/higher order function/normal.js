const arr = [2,2,3,4,5,5,6,7,8,8]

function  double(arr){
    const output = [];
    for(let i = 0 ;i < arr.length ; i++){
        output.push(2 * arr[i]);
    }
    return output;
}

function  square(arr){
    const output1 = [];
    for(let i = 0 ;i < arr.length ; i++){
        output1.push(arr[i] * arr[i]);
    }
    return output1;
}


console.log(double(arr));
console.log(square(arr));