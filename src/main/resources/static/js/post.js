import { currentDate } from "./main.js";
import { putMovieSetQuantity } from "./put.js";
import { displayPrint } from "./display.js";

// MOVIE POST
export const postMovie = e => {
    e.preventDefault();
    const display = document.querySelector('.section_add__display');

    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const publicationDate = document.getElementById('publication-date');
    const director = document.getElementById('director');
    const rating = document.getElementById('rating');
    const rentalCost = document.getElementById('rental-cost');
    const quantity = document.getElementById('quantity');
    const description = document.getElementById('description');

    const data = {
        title: title.value,
        category: category.value,
        publicationDate: parseInt(publicationDate.value),
        director: director.value,
        rating: parseFloat(rating.value),
        rentalCost: parseFloat(rentalCost.value),
        quantity: parseInt(quantity.value),
        description: description.value,
    }

    const options = {
        method: 'POST',
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
                displayPrint(display, -1, 'Błąd w dodaniu filmu do bazy danych');
            } else {
                displayPrint(display, 1, 'Film został dodany do bazy danych')
                title.value = category.value = publicationDate.value = director.value = rating.value = rentalCost.value = quantity.value = description.value = '';
            }
        })
        .catch(error => {
            console.log(error)
            displayPrint(display, -1, 'Błąd w dodaniu filmu do bazy danych');
        });
}

// CUSTOMER POST
export const postCustomer = e => {
    e.preventDefault();
    const display = document.querySelector('.section_customer__display');

    const name = document.getElementById('name');
    const lastName = document.getElementById('last-name');
    const birthDate = document.getElementById('birth-date');
    const town = document.getElementById('town');
    const phoneNumber = document.getElementById('phone-number');

    const data = {
        name: name.value,
        lastName: lastName.value,
        birthDate: birthDate.value,
        town: town.value,
        phoneNumber: phoneNumber.value
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }

    fetch('http://127.0.0.1:8080/customers', options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.status === 404 || data.status === 500) {
                displayPrint(display, -1, 'Błąd w dodawaniu nowego klienta.');
            } else {
                displayPrint(display, 1, 'Dodano nowego klienta do bazy danych.');
                name.value = lastName.value = birthDate.value = town.value = phoneNumber.value = '';
            }
        })
        .catch(error => {
            console.log(error);
            displayPrint(display, -1, 'Błąd w dodawaniu nowego klienta.');
        });
}

// RENT POST
export const postRent = (customerId, movieIdAndCost, display) => {
    const data = {
        customerId: {
            id: customerId,
        },
        movieId: {
            id: movieIdAndCost[0],
        },
        rentDate: currentDate,
        rentalCost: movieIdAndCost[1],
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }

    fetch(`http://127.0.0.1:8080/rents`, options)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(() => {
            if (data.status === 404 || data.status === 500) {
                displayPrint(display, -1, 'Błąd w utworzeniu wypożyczenia.');
            } else {
                displayPrint(display, 1, 'Dodano nowe wypożyczenie do bazy danych.');
                putMovieSetQuantity(-1, movieIdAndCost[0]);
            }
        })
        .catch(error => {
            console.log(error);
            displayPrint(display, -1, 'Błąd w utworzeniu wypożyczenia.');
        });
}