'use strict';

//console.log(document.querySelector('.message').textContent);

const getRandomInt = (max) => {
    return Math.floor(1 + Math.random() * Math.floor(max));
};

let num = getRandomInt(20);
let highScore = 0;
console.log(num);
let score = 20;
const message = document.getElementById('message');

// Add enter listener
document.addEventListener('keypress', (e) => {
    if (e.code == 'Enter') btnClick();
});

// onclick in html work as:
//document.querySelector('.check').addEventListener('click',function() {});

const btnClick = () => {
    const userInput = parseInt(document.getElementById('userinput').value);

    if (!userInput || userInput < 1 || userInput > 20) {
        alert('Illegal Input!');
        location.reload();
    }

    if (userInput === num) {
        message.innerHTML = '🤘🏾Correct Number!';
        document.querySelector('.number').textContent = num;
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
    num = getRandomInt(20);
    console.log(num);
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.getElementById('btnCheck').style.opacity = '100';
    message.innerHTML = 'Start guessing...';
    score = 20;
    document.getElementById('score').innerHTML = score;
    document.getElementById('userinput').value = '';
};
