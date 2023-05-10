INSERT INTO MOVIE (title, category, publication_date, director, rating, rental_cost, description)
VALUES
    ('The Lord of the Rings: The Fellowship of the Ring', 'Fantasy', 2002, 'Peter Jackson', 8.0, 22.00,
     'Podróż hobbita z Shire i jego ośmiu towarzyszy, której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona.'),
    ('The Lord of the Rings: The Two Towers', 'Fantasy', 2002, 'Peter Jackson', 8.3, 22.00,
     'Drużyna Pierścienia zostaje rozbita, lecz zdesperowany Frodo za wszelką cenę chce wypełnić powierzone mu zadanie. Aragorn z towarzyszami przygotowuje się, by odeprzeć atak hord Sarumana.'),
    ('The Lord of the Rings: The Return of the King', 'Fantasy', 2003, 'Peter Jackson', 8.4, 26.50,
     'Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.'),
    ('Spider-Man', 'Superbohaterski', 2002, 'Sam Raimi', 6.7, 18.50,
     'Nastoletni Peter Parker zmienia się w Spidermana, gdy mieszkańcom zagraża szalony Zielony Goblin.'),
    ('Spider-Man 2', 'Superbohaterski', 2004, 'Sam Raimi', 6.7, 18.50,
     'Peter Parker jest zmęczony byciem bohaterem i chce zostać zwykłym chłopakiem. Gdy jednak Doktor Octavius przemienia się w złego doktora, Spider-Man staje z nim do walki.'),
    ('Spider-Man 3', 'Superbohaterski', 2007, 'Sam Raimi', 6.6, 17.00,
     'Kostium Spider-Mana łączy się z substancją z kosmosu i zmienia kolor na czarny. Nowy strój daje Parkerowi olbrzymią siłę, ale też odkrywa mroczną stronę jego osobowości.'),
    ('John Wick', 'Akcja', 2015, 'Chad Stahelski', 6.9, 19.00,
     'Były płatny morderca ściga gangsterów, którzy wtargnęli do jego domu, dokonując brutalnej napaści i kradzieży.'),
    ('John Wick 2', 'Akcja', 2017, 'Chad Stahelski', 6.8, 20.25,
     'John Wick udaje się do Rzymu na prośbę starego przyjaciela, który chce przejąć kontrolę nad międzynarodową gildią zabójców.'),
    ('Jon Wick 3', 'Akcja', 2019, 'Chad Stahelski', 6.7, 23.50,
     'John Wick próbuje opuścić Nowy Jork po tym, jak zostaje wydalony z organizacji zabójców za morderstwo członka Najwyższej Rady.'),
    ('John Wick 4', 'Akcja', 2023, 'Chad Stahelski', 7.6, 33.40,
     'John Wick odkrywa sposób na pokonanie Gildii Zabójców. Zanim jednak odzyska wolność, będzie musiał stawić czoła nowemu wrogowi i jego sojusznikom, z którymi stoczy walki na kilku kontynentach.');

INSERT INTO CUSTOMER (name, last_name, birth_date, town, phone_number)
VALUES
    ('Krzysztof', 'Krakowiak', '2001-01-04', 'Drzewica', '333444555'),
    ('John', 'Snow', '1995-10-20', 'Warszawa', '948291859'),
    ('Harry', 'Potter', '1999-04-13', 'Kielce', '953820695'),
    ('Gandalf', 'Szary', '1960-05-05', 'Katowice', '123456789');

INSERT INTO RENT (customer_id, movie_id, rent_date, return_date, rental_cost, payed)
VALUES
    (1, 2, '2023-03-20', '2023-03-25', 22.00, TRUE);

INSERT INTO RENT (customer_id, movie_id, rent_date, return_date, rent_days, additional_cost, rental_cost)
VALUES
    (4, 3, '2023-04-20', '2023-04-28', 8, 1.25, 26.50);

INSERT INTO RENT (customer_id, movie_id, rent_date, rental_cost)
VALUES
    (2, 4, '2023-04-19', 19.50),
    (3, 1, '2023-04-10', 22.00);