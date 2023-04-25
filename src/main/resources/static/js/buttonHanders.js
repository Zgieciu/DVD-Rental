import { movieFetch } from "./get.js";

export const showActualSection = (sections, section) => {
    movieFetch();
    sections.forEach(section => {
        section.classList.remove('main__section--visable');
    });

    section.classList.add('main__section--visable');
}
