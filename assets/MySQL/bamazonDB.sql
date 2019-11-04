DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NULL,
department_name VARCHAR(45) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Antares", "Stars", 2500000.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sirius", "Stars", 3100000.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Europa", "Moons", 30000.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Callisto", "Moons", 35000.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mars", "Planets", 3000000.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jupiter",  "Planets", 9000000.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nebula", "Astronomical object", 10000.00, 10000000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Asteroid", "Minor planet", 3000.00, 10000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Trojan", "Minor planet", 2000.00, 100000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Milky Way",  "Galaxy", 30000000.00, 10000);