import { getMovie, getRent } from "./get.js";

export let movieIdAndCost;

// FUNCTION THAT SHOW ACTUAL SECTION AND GET DATA
export const showActualSection = (sections, section) => {
    getMovie();
    getRent();
    sections.forEach(section => {
        section.classList.remove('main__section--visable');
    });

    section.classList.add('main__section--visable');
}

// POPUP FUNCTIONS
export const rentMoviePopup = e => {
    document.querySelector('.overlay').classList.remove('overlay--hidden');
    document.querySelector('.section_rent__popup').classList.remove('popup--hidden');
    movieIdAndCost = e.target.id;
    movieIdAndCost = movieIdAndCost.split('-');
}

export const returnMoviePopup = () => {
    document.querySelector('.overlay').classList.remove('overlay--hidden');
    document.querySelector('.section_return__popup').classList.remove('popup--hidden');
}

export const exitOverlay = () => {
    document.querySelector('.overlay').classList.add('overlay--hidden');
    document.querySelector('.popup__form #phone-num').value = '';
    document.querySelector('.section_rent__popup .form__display').textContent = '';
    document.querySelectorAll('.popup').forEach(popup => popup.classList.add('popup--hidden'));
}

// SET EVENTLISTENER FUNCTIONS
export const setRentMovieBtns = () => {
    const btnsRentMovie = document.querySelectorAll('.data_rent__btn');
    btnsRentMovie.forEach(btn => btn.addEventListener('click', rentMoviePopup));
}

export const setReturnMovieBtns = () => {
    const btnsReturnMovie = document.querySelectorAll('.data_return__btn');
    btnsReturnMovie.forEach(btn => btn.addEventListener('click', returnMoviePopup));
}