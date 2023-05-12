import { showActualSection, exitOverlay, arrowScroll, rentId } from "./buttonHanders.js";
import { getMovieByTitle, getRentByPhoneNumber } from "./get.js";
import { postMovie, postCustomer } from "./post.js";
import { putRentSetReturnDate } from "./put.js";

// CURRENT DATE
const now = new Date();
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
};
export const currentDate = new Intl.DateTimeFormat('pl-PL', options).format(now).split('.').reverse().join('-');
const inputDate = document.getElementById('return-date');
inputDate.value = currentDate;
inputDate.setAttribute('max', currentDate);

// BUTTONS SELECTORS
const btnRent = document.querySelector('.btn__rent');
const btnReturn = document.querySelector('.btn__return');
const btnCustomer = document.querySelector('.btn__customer');
const btnAdd = document.querySelector('.btn__add');
const btnArrow = document.querySelector('.arrow');
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
btnArrow.addEventListener('click', arrowScroll);
btnsExit.forEach(btn => btn.addEventListener('click', exitOverlay));

// MOVIE POST
const movieForm = document.querySelector('.section_add__form');
movieForm.addEventListener('submit', postMovie);

// MOVIE POST - CHANGE QUANTITY
const movieChangeForm = document.querySelector('.form--change');
movieChangeForm.addEventListener('submit', getMovieByTitle);

// CUSTOMER POST
const customerForm = document.querySelector('.section_customer__form');
customerForm.addEventListener('submit', postCustomer);

// RENT POST 
const rentForm = document.querySelector('.section_rent__popup form');
rentForm.addEventListener('submit', getRentByPhoneNumber);

// RENT PUT
const returnForm = document.querySelector('.section_return__popup form');
returnForm.addEventListener('submit', (e) => putRentSetReturnDate(e, rentId));