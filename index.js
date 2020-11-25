const body = document.querySelector("body");

const title = document.createElement("h1");
body.appendChild(title);
title.innerText="Hellow!";
title.style.color="white";

function changeBackgroundColor(){
  const currentWidth = window.innerWidth;
  if(currentWidth >= 1200){
    body.style.backgroundColor = "yellow";
  }else if(currentWidth >= 500) {
    body.style.backgroundColor = "purple";
  }else {
    body.style.backgroundColor = "blue";
  }   
}

window.addEventListener("resize",changeBackgroundColor);