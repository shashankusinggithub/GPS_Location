
CREATE TABLE users (
    ID int NOT NULL AUTO_INCREMENT,
    lastname varchar(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY(ID)
    
);

-- USE gps_monitor;
-- DROP TABLE gps_locations;

USE gps_monitor;
CREATE TABLE gps_locations (
    ID INT NOT Null AUTO_INCREMENT,
    Device_ID varchar(20) NOT NULL,
    Device_Type varchar(20) NOT NULL,
    Time_Stamp DATETIME,
    Location varchar(20) NOT NULL,
    PRIMARY KEY(ID)
);


INSERT INTO gps_locations (Device_ID, Device_Type, Time_Stamp, Location)
VALUES ('D-1567', 'Aircraft', '2022-08-31 10:05:00', 'L1'),
('D-1567', 'Aircraft', '2022-08-31 10:10:00', 'L1'),
  ('D-1567', 'Aircraft', '2022-08-31 10:15:00', 'L1'),
  ('D-1567', 'Aircraft', '2022-08-31 10:20:00', 'L1'),
  ('D-1567', 'Aircraft', '2022-08-31 10:25:00', 'L2'),
  ('D-1568', 'Personal', '2022-08-31 10:05:00', 'L3'),
  ('D-1568', 'Personal', '2022-08-31 10:10:00', 'L3'),
  ('D-1568', 'Personal', '2022-08-31 10:15:00', 'L3'),
  ('D-1568', 'Personal', '2022-08-31 10:20:00', 'L3'),
  ('D-1568', 'Personal', '2022-08-31 10:25:00', 'L3'),
  ('D-1569', 'Asset', '2022-08-31 10:15:00', 'L4'),
  ('D-1569', 'Asset', '2022-08-31 10:20:00', 'L4'),
  ('D-1569', 'Asset', '2022-08-31 10:25:00', 'L1'),
  ('D-1569', 'Asset', '2022-08-31 10:30:00', 'L1'),
  ('D-1569', 'Asset', '2022-08-31 10:35:00', 'L2'),
  ('D-1570', 'Personal', '2022-08-31 10:35:00', 'L5'),
  ('D-1571', 'Asset', '2022-08-31 10:35:00', 'L6') 
;

USE gps_monitor;
SELECT * FROM users