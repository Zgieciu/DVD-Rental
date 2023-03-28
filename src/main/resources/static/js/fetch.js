export const movieFetch = () => {
    fetch('http://127.0.0.1:8080/movies')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const div = document.createElement('div');
                div.textContent = element.title;
                document.querySelector('body').appendChild(div);
            });
        })
}