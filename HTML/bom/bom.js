



const h1 = document.getElementsByTagName('h1')[0];
 
let btn = document.getElementById("direct");

let nxt = document.getElementById("nxt");
 
let secunds = 0;
let minutes = 0;
let hours = 0;

let increat = () => {
    secunds++;
    if(secunds > 59){
        secunds = 0;
        minutes++;
    }
    if(minutes > 59){
        hours++;
    }
    if(hours >23){
        secunds = 0;
        hours = 0;
        minutes = 0;
    }
    h1.textContent = `Time ${hours}:${minutes}:${secunds}`;
}

setInterval(increat, 500);

btn.addEventListener("click",()=>{
    location = "./about.html"
})
nxt.addEventListener("click",()=>{
    location = "./bom.html"
})
