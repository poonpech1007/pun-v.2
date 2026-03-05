CREATE DATABASE underwater_runner;

USE underwater_runner;

CREATE TABLE scores(

id INT AUTO_INCREMENT PRIMARY KEY,
player_name VARCHAR(50),
score INT,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);