import { movieFetch } from "./fetch.js";
import { showRentSection, showReturnSection, showAddSection } from "./buttonHanders.js";

document.addEventListener('DOMContentLoaded', () => {
    movieFetch();
});


const btnRent = document.querySelector('.btn__rent');
const btnReturn = document.querySelector('.btn__return');
const btnAdd = document.querySelector('.btn__add');

btnRent.addEventListener('click', showRentSection);
btnReturn.addEventListener('click', showReturnSection);
btnAdd.addEventListener('click', showAddSection);