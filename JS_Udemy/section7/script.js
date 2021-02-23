'use strict';

//console.log(document.querySelector('.message').textContent);

const getRandomInt = (max) => {
    return Math.floor(1+Math.random()*Math.floor(max));
}

const num = getRandomInt(20);
console.log(num);

let userInput = 0;

const btnClick = () => {
    userInput = parseInt(document.getElementById('userinput').value);
    if(!userInput) alert('No input!');
}

if(userInput === num) {
    document.getElementsByClassName('.message').value = '🤘🏾Correct Number!';
}

