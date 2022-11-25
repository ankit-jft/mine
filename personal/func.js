function imgComponent(url){
    let divElement = document.createElement("div");
    let imgElement = document.createElement("img");
    imgElement.src = url;
    let count = document.createElement("p");
    count.innerHTML = "0";
    let button = document.createElement("button");
    button.innerHTML = "like";
    divElement.append(imgElement,count,button)
    document.getElementById("main").append(divElement);
    button.addEventListener("click",function(){
        count.innerHTML=+count.innerHTML + 1;
    })
}