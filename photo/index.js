// calc = function outer(){
//     let count = 0
//       return  function increase(){
//             count++;
//             document.getElementById("value").innerHTML=count;
//         }
// }

// let calc = outer();

let cnt=0;
function calc(){
    cnt++;
    document.getElementById("value").innerHTML=cnt;
}