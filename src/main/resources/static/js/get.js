// MOVIE FETCH
export const movieFetch = () => {
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
}