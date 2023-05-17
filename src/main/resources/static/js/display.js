export const displayPrint = (container, condition, message,) => {
    if (condition > 0) {
        container.classList.remove('display--red');
        container.classList.add('display--green');
    } else if (condition < 0) {
        container.classList.remove('display--green');
        container.classList.add('display--red');
    }

    container.textContent = message;
}