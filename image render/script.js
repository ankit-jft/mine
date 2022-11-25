function image(link){
    let divElement = document.createElement("div");
    // console.log(divElement);

    let imgElement = document.createElement("img");
    // console.log(imgElement);
    imgElement.src = link;
    
    let count = document.createElement("p");
    // console.log(count);
    
    let button = document.createElement("button")
    // console.log(button);
    button.innerHTML = "LIKE"
    
    divElement.append(imgElement,count,button)
    // console.log(divElement);

    document.getElementById("main").append(divElement)
    // console.log(main)

    button.addEventListener("click",function(){
        count.innerHTML=+count.innerHTML + 1;
        console.log(count);
    })
}