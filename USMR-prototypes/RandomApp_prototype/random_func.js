const randBtn = document.getElementById("randBtn");
const randLabel = document.getElementById("randLabel");


const min = 1;
const max = 6;




randBtn.onclick = function(){
    let randomNumber = Math.floor(Math.random() * (max-min)) + min;
    randLabel.textContent = randomNumber;
}