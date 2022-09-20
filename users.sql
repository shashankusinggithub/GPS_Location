USE gps_monitor;

CREATE TABLE users (
    ID int NOT NULL AUTO_INCREMENT,
    lastname varchar(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY(ID)
    
);


