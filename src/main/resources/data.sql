INSERT INTO MOVIE (title, category, publication_date, director, rating, description)
VALUES
    ('The Lord of the Rings: The Fellowship of the Ring', 'Fantasy', 2002, 'Peter Jackson', 8.0,
     'Podróż hobbita z Shire i jego ośmiu towarzyszy, której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona.'),
    ('The Lord of the Rings: The Two Towers', 'Fantasy', 2002, 'Peter Jackson', 8.3,
     'Drużyna Pierścienia zostaje rozbita, lecz zdesperowany Frodo za wszelką cenę chce wypełnić powierzone mu zadanie. Aragorn z towarzyszami przygotowuje się, by odeprzeć atak hord Sarumana.'),
    ('The Lord of the Rings: The Return of the King', 'Fantasy', 2003, 'Peter Jackson', 8.4,
     'Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.'),
    ('Spider-Man', 'Superbohaterski', 2002, 'Sam Raimi', 6.7,
     'Nastoletni Peter Parker zmienia się w Spidermana, gdy mieszkańcom zagraża szalony Zielony Goblin.'),
    ('Spider-Man 2', 'Superbohaterski', 2004, 'Sam Raimi', 6.7,
     'Peter Parker jest zmęczony byciem bohaterem i chce zostać zwykłym chłopakiem. Gdy jednak Doktor Octavius przemienia się w złego doktora, Spider-Man staje z nim do walki.'),
    ('Spider-Man 3', 'Superbohaterski', 2007, 'Sam Raimi', 6.6,
     'Kostium Spider-Mana łączy się z substancją z kosmosu i zmienia kolor na czarny. Nowy strój daje Parkerowi olbrzymią siłę, ale też odkrywa mroczną stronę jego osobowości.');

INSERT INTO CUSTOMER (name, last_name, birth_date, town, phone_number)
VALUES
    ('Krzysztof', 'Krakowiak', '2001-01-04', 'Drzewica', '859202348'),
    ('John', 'Snow', '1995-10-20', 'Warszawa', '948291859'),
    ('Harry', 'Potter', '1999-04-13', 'Kielce', '953820695'),
    ('Gandalf', 'Szary', '1960-05-05', 'Katowice', '123456789');

INSERT INTO RENT (customer_id, movie_id, rent_date, return_date, rental_costs)
VALUES
    (1, 2, '2023-03-20', '2023-03-28', 20);

INSERT INTO RENT (customer_id, movie_id, rent_date, rental_costs)
VALUES
    (2, 4, '2023-04-19', 15),
    (3, 1, '2023-04-10', 20);