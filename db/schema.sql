DROP DATABASE IF EXISTS wanderlust_db;
CREATE DATABASE wanderlust_db;
USE wanderlust_db;

CREATE TABLE trips(
id INT NOT NULL auto_increment,
trip_name VARCHAR(100) NOT NULL,
traveled BOOLEAN NOT NULL DEFAULT FALSE,
PRIMARY KEY(id)
);