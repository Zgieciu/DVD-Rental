import { getRent, getRentByNotPayed } from "./get.js";

// PUT RENT - ADD RETURN DATE
export const putRent = (e, rentId) => {
    e.preventDefault();
    const returnDate = document.getElementById('return-date').value;

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
        .then(data => console.log(data))
        .then(() => {
            const display = document.querySelector('.section_return__popup .popup__display');
            display.textContent = 'Zwrot filmu został przyjęty.';
            display.classList.add('popup__display--green');
        })
        .then(() => {
            getRent();
            getRentByNotPayed();
        })
        .catch(error => console.log(error));
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
            const display = document.querySelector('.section_return__popup .popup__display');
            display.textContent = 'Zwrot filmu został przyjęty.';
            display.classList.add('popup__display--green');
        })
        .then(() => {
            getRentByNotPayed();
        })
        .catch(error => console.log(error));
}