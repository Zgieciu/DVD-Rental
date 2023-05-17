import { getMovie, getRent, getRentByNotPayed } from "./get.js";
import { displayPrint } from "./display.js";

// PUT MOVIE - CHANGE QUANTITY
export const putMovieSetQuantity = async (quantityAmount, movieId) => {
    const response = await fetch(`http://127.0.0.1:8080/movie/${movieId}`);
    const dataJSON = await response.json();
    const display = document.querySelector('.change__display');
    let quantity = dataJSON.quantity;

    quantity += quantityAmount;

    const data = {
        id: movieId,
        quantity: quantity,
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }

    fetch('http://127.0.0.1:8080/movies', options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status === 404 || data.status === 500) {
                displayPrint(display, -1, 'Błąd w zmianie ilości egzamplarzy filmu.');
            } else {
                displayPrint(display, 1, 'Poprawnie zmieniono ilość egzemplarzy filmu.');
                document.querySelectorAll('.form--change .form__text').forEach(input => input.value = '');
            }
        })
        .then(() => getMovie())
        .catch(error => {
            console.log(error);
            displayPrint(display, -1, 'Błąd w zmianie ilości egzamplarzy filmu.');
        });
}

// PUT RENT - ADD RETURN DATE
export const putRentSetReturnDate = (e, rentId) => {
    e.preventDefault();
    const returnDate = document.getElementById('return-date').value;
    const display = document.querySelector('.section_return__popup .display');

    const data = {
        id: rentId,
        returnDate: returnDate,
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }

    fetch('http://127.0.0.1:8080/rents', options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            putMovieSetQuantity(1, data.movieId.id);
            if (data.status === 404 || data.status === 500) {
                displayPrint(display, -1, 'Błąd w przyjęciu zwrotu filmu.');
            } else {
                displayPrint(display, 1, 'Zwrot filmu został przyjęty.');
                document.querySelectorAll('.form--change .form__text').forEach(input => input.value = '');
                getRent();
                getRentByNotPayed();
            }
        })
        .catch(error => {
            console.log(error);
            display.textContent = 'Błąd w zwrocie filmu.';
        });
}

// PUT RENT - CHANGE PAYED TO TRUE
export const putRentSetPayed = e => {
    const data = {
        id: e.target.id,
        payed: true,
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }

    fetch('http://127.0.0.1:8080/rents', options)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(() => {
            getRentByNotPayed();
        })
        .catch(error => console.log(error));
}