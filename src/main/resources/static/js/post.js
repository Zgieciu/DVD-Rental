import { currentDate } from "./main.js";

// MOVIE POST
export const postMovie = e => {
    e.preventDefault();

    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const publicationDate = document.getElementById('publication-date');
    const director = document.getElementById('director');
    const rating = document.getElementById('rating');
    const description = document.getElementById('description');

    const data = {
        title: title.value,
        category: category.value,
        publicationDate: parseInt(publicationDate.value),
        director: director.value,
        rating: parseFloat(rating.value),
        description: description.value,
        availability: true,
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
        .then(data => console.log(data))
        .then(() => {
            title.value = category.value = publicationDate.value = director.value = rating.value = description.value = '';
        })
        .catch(error => console.log(error));
}

// CUSTOMER POST
export const postCustomer = e => {
    e.preventDefault();

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
        .then(data => console.log(data))
        .then(() => {
            name.value = lastName.value = birthDate.value = town.value = phoneNumber.value = '';
        })
        .catch(error => console.log(error));
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
        rentalCosts: movieIdAndCost[1],
    }

    console.log(currentDate);

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
            display.textContent = 'Udało się poprawnie dodać nowe wypożyczenie do bazy danych.';
            display.classList.remove('form__display--red');
            display.classList.add('form__display--green');
        })
        .catch(error => console.log(error));
}