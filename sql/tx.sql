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
CREATE TABLE tx_pro(
  lid		INT         PRIMARY KEY AUTO_INCREMENT,
  product_id	INT,
  title		VARCHAR(32),
  subtitle	VARCHAR(128),
  price		DECIMAL(10,2),
  spec		VARCHAR(32),
  size		VARCHAR(32)
);

