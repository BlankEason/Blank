SET NAMES UTF8;

DROP DATABASE IF EXISTS tx;

CREATE DATABASE tx CHARSET=UTF8;

USE tx;

CREATE TABLE tx_user(
  uid     INT         PRIMARY KEY AUTO_INCREMENT,
  uname   VARCHAR(8)  UNIQUE,
  upwd    VARCHAR(16),
  email	  VARCHAR(16),
  phone	  INT,
  avatar  VARCHAR(16),
  user_name  VARCHAR(16),
  gender   VARCHAR(2)
);

