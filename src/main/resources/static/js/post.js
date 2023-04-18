// MOVIE POST
export const moviePost = e => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const data = {
        title: title,
        category: 'Fantasy',
        publication_date: '2003',
        director: 'director',
        rating: 3,
        description: 'opis',
        availability: true,
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }

    console.log(options.body);

    fetch('http://127.0.0.1:8080/movies', options)
        .then(res => {
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'));

}