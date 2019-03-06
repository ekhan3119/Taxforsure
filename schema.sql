drop database if exists taxforsure;
create database taxforsure;
/* use taxforsure;

CREATE TABLE users (
    `userId` INT AUTO_INCREMENT,
    `username` VARCHAR(50),
    `password` VARCHAR(32),
    `firstName` VARCHAR(20),
    `lastName` VARCHAR(20),
    `StreetAddress` VARCHAR(80),
    `City` VARCHAR(30),
    `State` VARCHAR(2),
    `Zip` VARCHAR(5),
    PRIMARY KEY (userId)
);
CREATE TABLE jobs (
    `JobID` int auto_increment,
    `JobNickName` varchar(50),
    PRIMARY KEY (`JobID`)
);
create table jobs_user(
  `userid` int(11) NOT NULL,
  `jobid` int(11) NOT NULL,
  `rate` numeric(3,2) not null,
  `timeEntry` numeric(2,2) not null,
  `date` timestamp,
  PRIMARY KEY (`userid`,`jobid`),
  FOREIGN KEY (`userid`) REFERENCES users(`userId`) on delete cascade,
  FOREIGN KEY (`jobid`) REFERENCES jobs(`JobId`)  on delete cascade

); */



