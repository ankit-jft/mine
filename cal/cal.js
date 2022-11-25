
function calc() {
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);

    if(isNaN(n1) || isNaN(n2)){
        alert("Enter valid numbers");
    }
    else{
        document.getElementById("result").value = n1 + n2;
    }
}

