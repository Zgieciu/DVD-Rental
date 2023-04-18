// MOVIE FETCH
export const movieFetch = () => {
    const conteiner = document.querySelector('.main__rent');
    conteiner.innerHTML = '';

    fetch('http://127.0.0.1:8080/movies')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const div = document.createElement('div');
                div.textContent = element.title;
                conteiner.appendChild(div);
            });
        })
}