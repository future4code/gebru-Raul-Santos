Use `gebru-4212001-raul-santos`;
#exercicio1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#exercicio2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Juliana",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Antonio Fagundes",
  989333.33,
  "1954-08-14", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Bruna Marquenize",
  14989333.33,
  "2001-05-15", 
  "female"
);


ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor MODIFY gender VARCHAR(6);

ALTER TABLE Actor DROP COLUMN salary;





SELECT * FROM Actor;

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

DELETE FROM Actor WHERE name = "Tony Ramos";

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor;





