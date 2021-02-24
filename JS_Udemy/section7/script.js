'use strict';

//console.log(document.querySelector('.message').textContent);

const getRandomInt = (max) => {
    return Math.floor(1 + Math.random() * Math.floor(max));
};

const num = getRandomInt(20);
let highScore = 0;
console.log(num);
let score = 20;
const message = document.getElementById('message');

const btnClick = () => {
    const userInput = parseInt(document.getElementById('userinput').value);

    if (!userInput || userInput < 1 || userInput > 20) {
        alert('Illegal Input!');
        location.reload();
    }

    if (userInput === num) {
        message.innerHTML = '🤘🏾Correct Number!';
        document.getElementById('btnCheck').style.opacity = '0';
        document.body.style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.getElementById('highscore').innerHTML = highScore;
        }
    } else {
        score--;
        if (userInput > num) message.innerHTML = 'Too High!';
        else message.innerHTML = 'Too Low!';
        document.getElementById('score').innerHTML = score;
    }
    if (score === 0) {
        alert('Seriously?!');
        location.reload();
    }
};

const reset = () => {
    document.body.style.backgroundColor = '#222';
    message.innerHTML = 'Start guessing...';
    score = 20;
    document.getElementById('score').innerHTML = score;
    document.getElementById('userinput').value = '';
};
