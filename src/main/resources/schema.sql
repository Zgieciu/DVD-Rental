CREATE TABLE MOVIE (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(75) NOT NULL,
    category VARCHAR(30) NOT NULL,
    publication_date INT NOT NULL,
    director VARCHAR(30) NOT NULL,
    rating FLOAT,
    rental_cost FLOAT NOT NULL,
    description VARCHAR(500),
    availability BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE CUSTOMER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    birth_date DATE NOT NULL,
    town VARCHAR(30) NOT NULL,
    phone_number VARCHAR(9) NOT NULL
);

CREATE TABLE RENT (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    movie_id INT NOT NULL,
    rent_date DATE NOT NULL,
    return_date DATE DEFAULT NULL,
    rental_cost FLOAT NOT NULL,
    delay INT DEFAULT 0,
    additional_cost FLOAT DEFAULT 0
);

ALTER TABLE RENT
    ADD FOREIGN KEY (customer_id)
    REFERENCES CUSTOMER(id);

ALTER TABLE RENT
    ADD FOREIGN KEY (movie_id)
    REFERENCES MOVIE(id);