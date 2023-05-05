import { moviePost, customerPost } from "./post.js";
import { showActualSection, exitOverlay } from "./buttonHanders.js";

// BUTTONS SELECTORS
const btnRent = document.querySelector('.btn__rent');
const btnReturn = document.querySelector('.btn__return');
const btnCustomer = document.querySelector('.btn__customer');
const btnAdd = document.querySelector('.btn__add');
const btnsExit = document.querySelectorAll('.popup__btn');

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
movieForm.addEventListener('submit', moviePost);

// CUSTOMER POST
const customerForm = document.querySelector('.section_customer__form');
customerForm.addEventListener('submit', customerPost);