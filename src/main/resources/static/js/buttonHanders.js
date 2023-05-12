import { getMovie, getRent, getRentByNotPayed } from "./get.js";
import { putRentSetPayed } from "./put.js";

export let movieIdAndCost;
export let rentId;

// FUNCTION THAT SHOW ACTUAL SECTION AND GET DATA
export const showActualSection = (sections, section) => {
    getMovie();
    getRent();
    getRentByNotPayed();
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

export const returnMoviePopup = e => {
    document.querySelector('.overlay').classList.remove('overlay--hidden');
    document.querySelector('.section_return__popup').classList.remove('popup--hidden');
    document.querySelector('.section_return__popup .popup__display').textContent = '';
    rentId = e.target.id;
}

export const exitOverlay = () => {
    document.querySelector('.overlay').classList.add('overlay--hidden');
    document.querySelector('.popup__form #phone-num').value = '';
    document.querySelectorAll('.popup__display').forEach(p => p.textContent = '');
    document.querySelectorAll('.popup').forEach(popup => popup.classList.add('popup--hidden'));
}

// SET EVENTLISTENER FUNCTIONS
export const setRentMovieBtns = () => {
    const btnsRentMovie = document.querySelectorAll('.data_rent__btn');
    btnsRentMovie.forEach(btn => btn.addEventListener('click', rentMoviePopup));
}

export const setReturnMovieBtns = () => {
    const btnsReturnMovie = document.querySelectorAll('.data_return--return .data_return__btn');
    btnsReturnMovie.forEach(btn => btn.addEventListener('click', returnMoviePopup));
}

export const setPayedBtns = () => {
    const btnsPayDelay = document.querySelectorAll('.data_return--not_payed .data_return__btn');
    btnsPayDelay.forEach(btn => btn.addEventListener('click', putRentSetPayed));
}

// ARROW SCROLL 
export const arrowScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}