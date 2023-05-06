import { setReturnMovieBtns, setRentMovieBtns } from './buttonHanders.js';

// MOVIE GET
export const movieGet = () => {
    const conteiner = document.querySelector('.section_rent__data');
    conteiner.innerHTML = '';

    fetch('http://127.0.0.1:8080/movies')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const html = `<div class="data_rent__record">
                    <span class="data_rent__text">Tytuł:</span> ${element.title} <br>
                    <span class="data_rent__text">Kategoria:</span> ${element.category} <br>
                    <span class="data_rent__text">Reżyser:</span> ${element.director} <br>
                    <span class="data_rent__text">Rok wydania:</span> ${element.publicationDate} <br>  
                    <span class="data_rent__text">Ocena:</span> ${element.rating} <br>
                    <span class="data_rent__text">Opis:</span> ${element.description} <br>
                    ${element.availability ? '<button class="data_rent__btn btn">Wypożycz</button>' : ''}
                </div >
                <div class="data_rent__img">
                    <img src="../images/${element.id}.jpg"
                </div>`;
                conteiner.insertAdjacentHTML('beforeEnd', html);
            });
        })
        .then(() => setRentMovieBtns())
        .catch(error => console.log(error));
}

// RENT GET
export const rentGet = () => {
    const conteiner = document.querySelector('.section_return__data');
    conteiner.innerHTML = '';

    fetch('http://127.0.0.1:8080/rents/notReturned')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const html = `<div class="data_return__record">
                    <span class="data_return__text">Użytkownik:</span> ${element.userId.name} ${element.userId.lastName} <br>
                    <span class="data_return__text">Nr. telefonu:</span> ${element.userId.phoneNumber} <br>
                    <span class="data_return__text">Wypożyczony film:</span> ${element.movieId.title} <br>
                    <span class="data_return__text">Data wypożyczenia: </span> ${element.rentDate} 
                </div>
                <button class="data_return__btn btn">Zwróć</button>`;
                conteiner.insertAdjacentHTML('beforeEnd', html);
            })
        })
        .then(() => setReturnMovieBtns())
        .catch(error => console.log(error));
}