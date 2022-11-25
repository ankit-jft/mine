// function x(){
//     console.log("namaste");
// }

// function y(x){
//     x();
// }

// const radius =[3,2,4,1]

// const calculateArea =  function (radius){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// };

// console.log(calculateArea(radius));


// const calculateCircumference =  function (radius){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * 2)
//     }
//     return output;
// };

// console.log(calculateCircumference(radius));

const radius = [3,4,2,1];

const area = function (radius){
    return Math.PI * radius * radius;
}

const cicumference = function (radius){
    return Math.PI * radius * 2;
}

const diameter = function (radius){
    return 2 * radius;
}

Array.prototype.calulate = function (logic){
    const output = [];
    for(let i = 0;i < radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output
}

console.log(radius.map(area));

console.log(radius.calulate(area));
// console.log(calulate(radius,cicumference));
// console.log(calulate(radius,diameter));