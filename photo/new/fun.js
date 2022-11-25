const button=document.getElementsByTagName("button");

for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",() => {
        button[i].childNodes[1].innerHTML=parseInt (button[i].childNodes[1].innerHTML) +1;
    });
}


//<button>LIKE<p>0</p></button>