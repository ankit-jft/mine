const arr = [5,1,3,2,6];


//map

// function double(x){
//     return 2 * x
// }

// function triple(x){
//     return x * 3;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map((x) => 2 * x);

// const output1 = arr.map((x) => x * 3);

// const output2 = arr.map((x) => x.toString(2));

// console.log(output);
// console.log(output1);
// console.log(output2); 

//filter

// filter odd values

// function isOdd(x){
//     return x%2;
// }
// const output = arr.filter((x) =>x % 2);

// console.log(output);

//reduce

//sum or max

// function findSum(arr){
//     let sum = 0;
//     for(let i =0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// },0);
// console.log(output)

// function findMax(arr){
//     let max = 0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>max)max = arr[i];
//     }
//     return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function(max, curr){
//     if(curr>max) max=curr;
//     return max 
// },0);
// console.log(output)

const users = [
    {firstName: "Ankit", lastName: "Raj", age: 22},
    {firstName: "Anshu", lastName: "Raj", age: 23},
    {firstName: "mohan", lastName: "mishra", age: 27},
    {firstName: "rohan", lastName: "sinha", age: 92},
    {firstName: "ravi", lastName: "verma", age: 22}
];

const ouput =  users.map((x) => x.firstName + " " + x.lastName)
console.log(ouput);

const output = users.reduce(function(acc,curr){
    if(acc(curr.age)){
        acc[curr.age]+=1;
    }
    else{
        acc[curr.age]==1
    }
    return acc;
},{})
console.log(output);