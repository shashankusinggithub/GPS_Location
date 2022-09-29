# GPS Location

  

## Description

  

This is a full stack application to store the GPS data of the devices and provide insights using visualisation of data

  
  

- It displays the complete GPS data of devices in a tabular form with sorting options

- Techologies used for this project are

-- React | Node.js | Express.js | MySQL

  
  

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
Just enter the following commands in the terminal and cypress runs the unit tests and displays the result in the terminal

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
![USE CASE](https://viewer.diagrams.net/index.html?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=GPS_Location.drawio#R7V1Zc9s4Ev41qpp5sIr38eh7U5tkXLEzkzxtwSIsMaFIDUnZ1vz6BUCAJA5JFA2R8m6UqlhskCDZ/XWju9GAJvbl8vU2B6vFpyyCycQyoteJfTWxLCuwA/QHUzYVxTTCsKLM8ziitIZwH/8D2YmUuo4jWFQ0SiqzLCnjVcFdPcvSFM5KjgbyPHvhT3vKEv6uKzCHEuF%2bBhKZ%2blcclYuKGrhGQ/8XjOcLdmfToC1LwE6mhGIBouylRbKvJ/ZlnmVl9W35egkTzD3Gl%2bq6my2t9YPlMC27XGDMLqJk7cMiuXCNL8sPG/Dl5cytenkGyZq%2bMH3YcsM4gJ57hb%2bu8mwGC8TOi5dFXML7FZhh8gsSPKItymWCjkz09RHMfs7zbJ1Gf6zLJE4hpT/FSXKZJVlO%2brUvL29urj1ELyqhG1PDET64VX5N%2bubPMC/ha4tEX/sWZktY5ht0CoOhQ0VAQciE99II1GG0RUuYoUHZAyiI5nXXDZ/RF8rqA9juS2z/mM3jVOI96goBHe7nuQYuhQKTfJlLpqPgEjtPO5MCiUn38RzxyPi6GpVRApp8BZyGZVS4X4lhGp1ja4iOZgkoinjGswVxI998w1rIDr7Tg60MK7J1PoM7Hsuj5hrkc1julzOMOEsss7/FX5W2MloOE1DGz7z9VvGc3uEui9Gb1dL1RFshSK16bXpR29wK/ZiOy8MkEIxJxRepI4KA%2bq37g4INoG9CxWtcElBMXXr0nTu6g3mMnhPmbeDIKCLnHx9H/knhyOXF74hjSWcc2Twg7UAA5BYcIcGCTeu0FT6hOArSmAVtkHZ99gnE%2bEKQ5BBE%2bDkQXgp6/16GW/AewhD7D5r8A2HoC4KxLbppaVTeturS71ev7YMNPYhAsYDRvoFyr74yPLwzw2%2ba4ZTXWU/spKvO1o/EBhGrm85q00hbgg8gV0WwRHqJtNBIM/y8WKmQxC10Gw8sscalj8WKSN9LSuzL5%2bjbHH%2bDy0qjqwuxr4pirjzHMRcOq3IU70zwa14S1BTFS5ajjo0EpnMkPNxC70D6RQQP97AAeSHf6ySthCP4fYGtsBKeAp%2bmeTQz4egc4w0z4EZ52w12mguVB6DLhNgnZRpEp9D3%2bjqFgdBROLBhkOP9u0ZXkdZYxnWl56I5QBpfqztW8f97c2B5AT9YOApz4A9rDjyd5sByfM4cGJ4/mjlwO3oUpxUCWK4teBShVfsYB/sUBhKJbSBFCZA/YYc272GY1tRHPqoXWoHnWLY1rFmR81m9gWdOpEhzR1RJDhs8kiMGyP54CzrCzTwtD1aMY5zA64s2RxyoxFDnyIjyQhlAiMn39DDNcFb5giSZiX3B8s7ycpHNsxQkH7NsRaH0A5blhk4rgHWZ7QedudPKFejFSwZk%2bhiEdhPjN6QwVEAdEekpb7SFXTF3GJi2pwu2pMlMHiCmYRg7ERUKCRHxAvSleoZulwcd0yDaTJycjf6QFshbIN4PwpVlXIESPALkluhyV56CGZzNCMDy7CdstTwGLp6x0BPXCFbDV8U1g2Y/fHdQ5ecSJFNb%2bBzs8zTD1TQMbH7I8pBd2z1okSOxy/GNTtjVATN0W6c3IcnxhkXS1OcT5bvHkp3oMScHOTtdINJf/vXU%2bz75s0mPwUYn3XbekpPZN3FeYDP/GSz12fYb8tFjwb2AD0V925EtuLHD79Sud8z/b09wg3fGxHB0JspZXJqcwde9Bx4iL2VsHsoZ0ibhJeaZfoPpLN%2bsShj9/i7YG5qjs7dD/VDn0gPViHccF22AgdA6rQx2YHm8ZjoCJLomBnzXnBrNh831sW59Zxq2PjZ/kyPHaJaO/Kcaje8bi85pYdEUsCiap85YtHdhMTTDMbGoIyXajiQd3jr622LFdwxT67RgKppMq2cuNTC8XTD1%2bsB0wIBITnz9GuK5UPFU8SrOM3Y2q95OvFoDDfF/FuW3Lx9%2bPHz%2bXnw%2b%2bwZ%2bPNyb/z4zJeyNMAfQssuWyyO6Bvgh6T0ljPqBl0387QevocbqMHk59pgto3K%2bLhfodeMZKCFqWReIPa2CpRMMxxyhKsQzxk6cs5u9xVbz%2brRjVnarevRHr98RvAw%2bJ2J5HUMAQl%2bH1nG3IGog6zrivMseg9txbkOLDXW6Vps44Zg21JFzL%2bczskLLMm5zkJa4sNMAKf7/IfsJcYnWLUxhDkiLJoM6zBxlbTJZZUMom1rbHtLUsszmsXVFWfuyz8sYfb7Q6Tpf6Hb1oQfSKXkp1Rf49xqSqYuPGfJN4izFCvYAHpPTnMcQa1VVqx2H9UrcYYYVTaBvOfe8b9/fs%2b%2bjQUwx9teghbo1aEtUGAr1Ox3XNBxaWBRahvI%2byjIhXUkOd%2bg6Aa5MoGuw6esINjk1aZSgrSnmsYeHzuBmWBi52M1xxMV8O934UCiedIZA8LAFkzyCBymZ5GrJt69XPk5FsN%2b5AGosf0YZ0O02a438rxvqserqducM%2bo%2b6h%2bFGKZ0jGzF/qDBRCQF5HuqPL0pUfASPMOElCRK84QJiLWIOHkAusBsaz0ByThuWcRRVoIFF/A/xiSu5UIuKOncvJu5VzXnJj613bqEXT%2br9Utoy2Q7urX7wmTG1DJ8vmKBpo76eEDsle3oq4FFmDRmmWtL6VLHYMv5C/FDUrPyJhBShkB5HJeUCn1jSYB9RAfH7yYKrqo2mVVmpsr46F2hGLvRVeYDQ822gaycXcaW2Ig1gKmIbsVhcW2zj/U/ENnsdyXrUt4MDPFet03Kds3Je12qHYVIK3jChxcgI6S/XLeLqnDvSHuiK67zNjkufhpuSZyxTZqmaJf7ZU232I/gcz04zX2UL%2bSrbUuSrVEWNR7PpTN4t9l4R/v3nw9VJstBn24UwxKqWIg9aFxp0qMRrTJ65n3v15nmGzMonF//D9CwtW/S6ckRySTzy0cN8x/cFc2HKzFetAz/i%2bqn3OeQcuOKl/5DTfTXTac1O%2bHJ0QA3Tw2Z1mtZdNE2WqkZiUNPE1PWXcrxVOazTUg5LUo4HFHogni/fsF3kkKrhja4awS/V0KMaXRd/DKQa8kIyNpf9LjSjc0hwPM2Q6wJYSQ18XcU5KbUh2ycx8meyL9L5M4rFcGZzqo3RWvcw4l1XZanA0bYwUuZ0ZQt0lPpeLcv8h6xJ67oHapUlGy3XJWnJV5JvFkTKdhRfL5PzWZm1JxbIJMRdVsTEONlXj1lZZkt0QoIbLuqdxdvhH/koJifKTNCkrNqO/LLeKt6gQSMb4bYLqLtOnQkbo7hs2Ug7R63QKXFLOX1rNOV0xld%2bFuDEBbRloOFTApqlKG43U1e/jCVFUx6Bbu/uJ9Usz/sVona5Gbzc6t%2bRGEturjz/ehUXq4SkimkVYTWnV6xAyknQ%2b3uNfxviYlbx7Ryb8fkj%2bI3uqij8%2bZ0MOAZm6NkTWMbJprpkmaVZUTkXdXv1iwu41Vi9VnTE3/KMzveek8dADjlpYo/R7MboEt63fvDDRQzBVPJjFvURY5Bb7Vfg4ndyyfSui1niIr7uO9esz2Ww6NWN1XRTyaFuYRXTbqtmmp1aSaI%2blTlsiNB22XA7cdownagBppjksEE964UhH7e2HqrCd5fXrpvqN26UwMVqUJ9JJkJZN5uGTuY3GL1Si6b3dhvVj7rRb7WBoqHPWw8gCoQc1lJpE3ms0PMkUHl0e9CbSjs07weKLJqlLl6PvEfP1ZQhdg1%2bYZ6lCmcshVE62gyHK6/pbIzSEBNI4zBeGUcOyvhgoFUDhy9pPGArKs/al2J555uYuaexxWJoC1Wne8pOPWH1mDNE3Wkw3pqxQapO%2b2YZ9Ra/dIeu9vrTftAV3HDHPBC65hDQlV3zyySGtKqjjWjsHIs57Pa4ReHVHuQoqXsFpWoA5dVma8DL5r6p9mCpaBk%2bxUKYwJKGT9XvHdhHGz1VW1HQgsjGN6wImB/KaEoIgBCWX5Vhzj3Mn3GWpPZAqx75uyDy41av9FRRU6HE3PmjTP3XmylmsTSBZEKDhpYRaMIF%2b/q/)