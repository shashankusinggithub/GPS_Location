# GPS Location

  

## Description

  

This is a full stack application to store the GPS data of the devices and provide insights using visualisation of data

  
  

- It displays the complete GPS data of devices in a tabular form with sorting options

- Techologies used for this project are

- React | Node.js | Express.js | MySQL

  
  

## Table of Contents 

  

- [Installation](#installation)

- [Execution](#execution)

- [Testing](#testing)

- [Use Case](#use-case)

  

# Installation

  

Clone data using the following commanad and install dependencies.

  

```

git clone https://github.com/shashankusinggithub/Gps_Location.git

npm i dependencies

cd ./client

npm i dependencies

```

### Setup the MySQL Sever in your local machine

- Follow [MySql Installation](https://www.prisma.io/dataguide/mysql/setting-up-a-local-mysql-database#debian-and-ubuntu) guide to run MySQL server in you lacal machine

- Connect the MySQL server into the VS code terminal or you can use any extention to connect and run the following Command



```

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

  

CREATE TABLE gps_locations (

ID INT NOT Null AUTO_INCREMENT,

Device_ID varchar(20) NOT NULL,

Device_Type varchar(20) NOT NULL,

Time_Stamp DATETIME,

Location varchar(20) NOT NULL,

PRIMARY KEY(ID),

FULLTEXT(Device_ID, Device_Type)

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

```

  

Open .env file in the local repository and enter the details

```

MYSQL_HOST = '127.0.0.1'

MYSQL_USER = '<your username>'

MYSQL_PASS= '<your password>'

MYSQL_DB = 'gps_monitor'

PORT = 8080

SALT = 3

JWTPRIVATEKEY= '<JWT Key>'

```

MYSQL_HOST = your local host address which is by default '127.0.0.1' or address of remote server

MYSQL_USER = user name created while setting up SQL local server

MYSQL_PASS= password selected up SQL local server

MYSQL_DB = 'gps_monitor' or data base name you wish to choose

PORT = 8080 of port on which your backend is runnning

SALT = 3, higher number determines the complexity of password encrypeted and stored in back end

JWTPRIVATEKEY= '<JWT Key>' key to generate token that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

  
  

  
  

# Execution

## Back End setup
After successfully setting up the .env file and connecting SQL server. Run the following command to initiate the Backend-server.

```md

npm start

```

## Front End setup
After successfully setting up the backend server. Run the following command in the terminal to initiate the frontend-server.

```md
cd ./client
npm start

```

Navigate to [localhost:3000](localhost:3000) or which ever port it got allocated to.

- Sign up by entering the details.
- Login using the email and password used while signing up
- You wont be able create another account using the same email-id

  
  

# Testing


## Back End ( React.js ) Unit Tests
Just enter the following commands in the terminal and cypress runs the unit tests and displays the result in the terminal

```md
cd
npx cypress run
```
<b>OR for GUI interface tests</b>
Run following commands.


```md
cd
npx cypress open
```
-Select E2E Testing.
-Configure it and select the appropriate browser

## Front End ( React.js ) Unit Tests


<b>Open './client/cypress/e2e/Sign up and Sign in .cy.js' </b>
- Change the variables accordingly
```
    const first_name = 'first'
    const last_name = 'last'
    const email = 'abcd@gmail.com'
    const password = '123456'
    const wrong_password = 'akjdfhskdj'

```
- Or comment out the first test <b> 'Sign up Successfull' </b> to stop the test from creating the test again and again


<b>Open './client/cypress/e2e/tableCheck.cy.js' </b>
- Change the variables accordingly
```
    const email = 'abcd@gmail.com'
    const password = '123456'

```

Just enter the following commands in the terminal and cypress runs the unit tests and displays the result in the terminal.

```md
cd
cd ./client
npx cypress run
```
<b>OR for GUI interface tests</b>
Run following commands.


```md
cd
cd ./client
npx cypress open
```
-Select E2E Testing.
-Configure it and select the appropriate browser




# Use-Case
![USE CASE](./client/src/images/Use%20Case%20Diagram.png)
