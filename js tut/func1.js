const radius = [3,1,2,4];
const calulateArea = function (radius){
    const output = [];
    for(let i =0;i < radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calulateArea(radius));

const calulateCircumference = function (radius){
    const output = [];
    for(let i = 0;i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}
console.log(calulateCircumference(radius));

const calulateDiameter = function (radius){
    const output = [];
    for(let i = 0;i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calulateDiameter(radius));

