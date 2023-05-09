import { postMovie, postCustomer } from "./post.js";
import { showActualSection, exitOverlay } from "./buttonHanders.js";
import { getRentByPhoneNumber } from "./get.js";

// CURRENT DATE
const now = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
};
export const currentDate = new Intl.DateTimeFormat('en-US', options).format(now).split('/').reverse().join('-');

// BUTTONS SELECTORS
const btnRent = document.querySelector('.btn__rent');
const btnReturn = document.querySelector('.btn__return');
const btnCustomer = document.querySelector('.btn__customer');
const btnAdd = document.querySelector('.btn__add');
const btnsExit = document.querySelectorAll('.popup__btn_x');

// SECTIONS SELECTORS
const rentSection = document.querySelector('.main__rent');
const returnSection = document.querySelector('.main__return');
const customerSection = document.querySelector('.main__customer');
const addSection = document.querySelector('.main__add');
const navSections = document.querySelectorAll('.main section');

// EVENT LISTENERS ON BUTTONS
btnRent.addEventListener('click', () => showActualSection(navSections, rentSection));
btnReturn.addEventListener('click', () => showActualSection(navSections, returnSection));
btnCustomer.addEventListener('click', () => showActualSection(navSections, customerSection))
btnAdd.addEventListener('click', () => showActualSection(navSections, addSection));
btnsExit.forEach(btn => btn.addEventListener('click', exitOverlay));

// MOVIE POST
const movieForm = document.querySelector('.section_add__form');
movieForm.addEventListener('submit', postMovie);

// CUSTOMER POST
const customerForm = document.querySelector('.section_customer__form');
customerForm.addEventListener('submit', postCustomer);

// RENT POST 
const rentForm = document.querySelector('.section_rent__popup form');
rentForm.addEventListener('submit', getRentByPhoneNumber);