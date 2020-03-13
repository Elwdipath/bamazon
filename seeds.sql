DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name varchar(50),
    department_name varchar(50),
    price INT NOT NULL,
    stock_quantity int NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Grocery", 5, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Grocery", 5, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LCD TV", "Electronics", 500, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 700, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Louiseville Slugger", "Sporting Goods", 100, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoka One One", "Sporting Goods", 120, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Power of One", "Books", 20, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Signal and the Noise", "Books", 20, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo", "Health", 5, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tylenol", "Health", 5, 100);



