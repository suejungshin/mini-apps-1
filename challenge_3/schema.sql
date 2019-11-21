
DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE transactions (
  id int AUTO_INCREMENT PRIMARY KEY,
  name text,
  email text,
  password text,
  addressLine1 text,
  addressLine2 text,
  city text,
  state text,
  zipCode text,
  phoneNum text,
  creditCardNum text,
  expiryDate text,
  CVV text,
  billingZip text
)

