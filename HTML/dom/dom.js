
myBtn = document.getElementsByClassName("myBtn");
let body = document.getElementsByTagName("body")[0];
let divs = document.getElementsByClassName("box");

console.log(myBtn);

let getColor = () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

let change = () => {
    body.style.backgroundColor = getColor();
    for(let i = 0; i < 4; i++){
        divs[i].style.backgroundColor = getColor();
    }
}

for(let i = 0; i < divs.length; i++){
    myBtn[i].addEventListener('click', change)
}