DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  product_name VARCHAR(45) NULL,
  department VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price_holder VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock VARCHAR(45) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Antares", "  | Department name: ", "Stars              ", "| Price: $ ", 2500000.00, " | Stock quantity: ", 1);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Sirius", "   | Department name: ", "Stars              ", "| Price: $ ", 3100000.00, " | Stock quantity: ", 1);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Europa", "   | Department name: ", "Moons              ", "| Price: $   ", 30000.00,  " | Stock quantity: ", 1);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Callisto", " | Department name: ", "Moons              ", "| Price: $   ", 35000.00, " | Stock quantity: ",  1);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Mars", "     | Department name: ", "Planets            ", "| Price: $ ", 3000000.00,  " | Stock quantity: ", 1);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Jupiter", "  | Department name: ", "Planets            ", "| Price: $ ", 9000000.00, " | Stock quantity: ",  1);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Nebula", "   | Department name: ", "Astronomical object", "| Price: $   ", 10000.00, " | Stock quantity: ",  10000000);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Asteroid", " | Department name: ", "Minor planet       ", "| Price: $    ", 3000.00,  " | Stock quantity: ", 10000);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES (" | Name: ", "Trojan", "   | Department name: ", "Minor planet       ", "| Price: $    ", 2000.00, " | Stock quantity: ",  100000);

INSERT INTO products (name, product_name, department, department_name, price_holder, price, stock, stock_quantity)
VALUES ("| Name: ", "Milky Way", "| Department name: ", "Galaxy             ", "| Price: $", 30000000.00, " | Stock quantity: ",  10000);