function calc(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);

    let op=document.getElementById("operator").value;

    // document.getElementById("result").value=n1+op+n2;


    switch(op){

        case '+' :
            document.getElementById("result").value=n1+n2;
            break;

        case '*' :
            document.getElementById("result").value=n1*n2;
            break;
    
        case '-' :
            document.getElementById("result").value=n1-n2;
            break;

        case '/' :
            document.getElementById("result").value=n1/n2;
            break;
    }

}