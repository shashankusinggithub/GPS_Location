
DROP DATABASE gps_monitor;
CREATE DATABASE gps_monitor;

  
USE gps_monitor;

CREATE TABLE users (

ID int NOT NULL AUTO_INCREMENT,

lastname varchar(255) NOT NULL,

firstname varchar(255) NOT NULL,

email varchar(255) NOT NULL,

password varchar(255) NOT NULL,

PRIMARY KEY(ID)

);


USE gps_monitor; 
CREATE TABLE gps_locations (

ID int NOT NULL AUTO_INCREMENT,

Device_ID varchar(20) NOT NULL,

Device_Type VARCHAR(20) NOT NULL,

Time_Stamp DATETIME,

Location varchar(20) NOT NULL,
PRIMARY KEY (ID)

) ;




  

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

-- use gps_monitor;
-- select * from gps_locations where match( Device_ID, Device_Type) against('aircra*'  IN BOOLEAN MODE );
-- -- limit 5;

-- use gps_monitor;
-- select count(Device_ID) from gps_locations where Device_ID  like '%asset%' or Device_Type  like '%a%' ;
-- -- count(*) from temp;

-- select * from gps_locations where Device_ID  like '%asset%' or Device_Type  like '%a%' limit 5 ;



-- use gps_monitor;
-- select * from gps_locations order by Device_ID 
-- limit 15,5;

--
-- select * from gps_locations where match(Device_ID, Device_Type) against('Aircraft'IN NATURAL LANGUAGE MODE);

-- DROP DATABASE gps_monitor;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

use gps_monitor;
select * from gps_locations
order by Device_Type asc;
