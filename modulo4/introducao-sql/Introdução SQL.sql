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



#exercicio3
SELECT * FROM Actor;

SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Fernanda Montenegro";

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary < 500000;

SELECT id, name from Actor WHERE id = "002";

DELETE from Actor WHERE id="003";





