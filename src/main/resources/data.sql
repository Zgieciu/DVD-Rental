INSERT INTO MOVIE (title, category, publication_date, director, raiting, description)
VALUES
    ('The Lord of the Rings: The Fellowship of the Ring', 'Fantasy', 2002, 'Peter Jackson', 8.0,
     'Podróż hobbita z Shire i jego ośmiu towarzyszy, której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona.'),
    ('Spider-Man 2', 'Superbohaterski', 2004, 'Sam Raimi', 6.7,
     'Peter Parker jest zmęczony byciem bohaterem i chce zostać zwykłym chłopakiem. Gdy jednak Doktor Octavius przemienia się w złego doktora, Spider-Man staje z nim do walki.');

INSERT INTO CUSTOMER (name, last_name, birth_date, town, phone_number)
VALUES
    ('Krzysztof', 'Krakowiak', '2001-01-04', 'Drzewica', '859202348');

INSERT INTO RENT (user_id, movie_id, rent_date, return_date, rental_costs)
VALUES
    (1, 2, '2023-03-20', '2023-03-28', 20);