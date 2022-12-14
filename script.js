/* MENU BTN BURGER*/
// const menuBtn = document.querySelector('.js-menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//   if(!menuOpen) {
//     menuBtn.classList.add('open');
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     menuOpen = false;
//   }
// });


// const colorBlocks = document.querySelector('.color-block');

// COLOR PALETTE
let lightMain = '#E2652F';
let lightSecondary = '#074DFF';
let lightAlert = '#EA2B1F';
let lightWhite = '#FDFCFC';
let lightGrey100 = '#878482';
let lightGrey200 = '#524F4E';
let lightBlack = '#201F1F';

let darkMain = '#E2652F';
let darkSecondary = '#074DFF';
let darkAlert = '#EA2B1F';
let darkWhite = '#FDFCFC';
let darkGrey100 = '#878482';
let darkGrey200 = '#524F4E';
let darkBlack = '#201F1F';


// LIGHT TOGGLE
const  lightBtn = document.querySelector('#js-nav__light-toggle')

let lightOn = true;
lightBtn.addEventListener('click', () => {
    lightOn ? !lightOn : lightOn;
    console.log(lightOn);
})