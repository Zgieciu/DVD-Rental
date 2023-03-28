const rentSection = document.querySelector('.main__rent');
const returnSection = document.querySelector('.return__rent');
const addSection = document.querySelector('.add__rent');

export const showRentSection = () => {
    rentSection.classList.add('main--visable');
    returnSection.classList.remove('main--visable');
    addSection.classList.remove('main--visable');
}

export const showReturnSection = () => {
    rentSection.classList.remove('main--visable');
    returnSection.classList.add('main--visable');
    addSection.classList.remove('main--visable');
}

export const showAddSection = () => {
    rentSection.classList.remove('main--visable');
    returnSection.classList.remove('main--visable');
    addSection.classList.add('main--visable');
}
