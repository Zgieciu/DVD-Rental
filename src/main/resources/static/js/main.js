import { moviePost } from "./post.js";
import { showRentSection, showReturnSection, showAddSection } from "./buttonHanders.js";

const btnRent = document.querySelector('.btn__rent');
const btnReturn = document.querySelector('.btn__return');
const btnAdd = document.querySelector('.btn__add');

btnRent.addEventListener('click', showRentSection);
btnReturn.addEventListener('click', showReturnSection);
btnAdd.addEventListener('click', showAddSection);

// MOVIE POST
const form = document.querySelector('.form');
form.addEventListener('submit', moviePost);