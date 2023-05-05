import { movieGet, rentGet } from "./get.js";

export const showActualSection = (sections, section) => {
    movieGet();
    rentGet();
    sections.forEach(section => {
        section.classList.remove('main__section--visable');
    });

    section.classList.add('main__section--visable');
}

export const showMoviePopup = () => {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.section_rent__popup');
    overlay.classList.remove('overlay--hidden');
    popup.classList.remove('popup--hidden');
}

export const returnMoviePopup = () => {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.section_return__popup');
    overlay.classList.remove('overlay--hidden');
    popup.classList.remove('popup--hidden');
}

export const exitOverlay = () => {
    const overlay = document.querySelector('.overlay');
    const popups = document.querySelectorAll('.popup');
    overlay.classList.add('overlay--hidden');
    popups.forEach(popup => popup.classList.add('popup--hidden'));
}
