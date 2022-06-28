Use `gebru-4212001-raul-santos`;

SELECT * FROM Rating;#Seleciona Tabela Rating
SELECT * FROM Movie;#Seleciona Tabela Movie
SELECT * FROM MovieCast;#SELECIONA O MOVIE CAST

DROP TABLE Movie; #apaga Tabela Movie
DROP TABLE Rating;#apaga Tabela Rating

ALTER TABLE Movie DROP COLUMN name;

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL
    
);

INSERT INTO Movie (id, name) 
VALUES (
	"001",
    "Vingadores!"
);

INSERT INTO Movie (id, name) 
VALUES (
	"002",
    "Vingadores 2!"
);

INSERT INTO Movie (id, name) 
VALUES (
	"004",
    "Vingadores 3!"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    6,
		"002"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Muito bom!",
    8,
		"004"
);

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "004"
);

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;