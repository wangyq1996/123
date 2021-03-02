'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

/* use getElementsByClassName
const buttons = document.getElementsByClassName('show-modal');
for (let i of buttons) i.addEventListener('click', showModal);
*/

// use querySelectorAll
const buttons = document.querySelectorAll('.show-modal');
buttons.forEach((e) => {
    e.onclick = showModal;
});

// addEventListener Way
document.querySelector('.close-modal').addEventListener('click', closeModal);
// onclick Way
overlay.onclick = closeModal;

/* addEventListener Way
document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
        if (!modal.classList.contains('hidden')) closeModal();
    }
});
*/

// onkeydown Way
document.onkeydown = (e) => {
    if (e.code == 'Escape') {
        if (!modal.classList.contains('hidden')) closeModal();
    }
};
