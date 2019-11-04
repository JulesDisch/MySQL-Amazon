var mysql = require("mysql");
var inquirer = require("inquirer");
var choice;
var quantity;
var Table = require('cli-table');
var productTable;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Antares78*",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    runManager();
});

function runManager() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product",
                "Exit"]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View Products for Sale":
                    productList();
                    break;

                case "View Low Inventory":
                    lowInventory();
                    break;

                case "Add to Inventory":
                    addInventory();
                    break;

                case "Add New Product":
                    addProduct();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
};

function productList() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("Here are all available products:")
        productTable = new Table({
            head: ['ID', 'Product', 'Department', 'Price', 'Stock Quantity'],
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            }
        });
        for (var i = 0; i < res.length; i++) {
            productTable.push(
                [res[i].id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity],
            );
        }
        console.log(productTable.toString());
        runManager();
    });
};

function lowInventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("Here are all low inventory products:");
        productTable = new Table({
            head: ['ID', 'Product', 'Department', 'Price', 'Stock Quantity'],
            chars: {
                'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗'
                , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
                , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
                , 'right': '║', 'right-mid': '╢', 'middle': '│'
            }
        });
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5)
                productTable.push(
                    [res[i].id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity],
                );
        }
        console.log(productTable.toString());
        runManager();
    });
};

function addInventory() {
    inquirer
        .prompt({
            name: "id",
            type: "input",
            message: "What is the ID of the product to which you would like to add inventory?",
        })
        .then(function (answer) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, { id: answer.id }, function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    console.log("You have selected " + res[i].product_name + ". There is/are currently " + res[i].stock_quantity + " available.");
                    choice = answer.id;
                    price = res[i].price;
                    howMany();
                }
            })
        });
};

function howMany() {
    inquirer
        .prompt({
            name: "stock_quantity",
            type: "input",
            message: "How many you would like to add?",
        })
        .then(function (answer) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, { id: choice }, function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    quantity = parseInt(res[i].stock_quantity) + parseInt(answer.stock_quantity);
                    connection.query("update bamazondb.products set ?  where ?",
                        [
                            { stock_quantity: quantity },
                            { id: choice }
                        ],
                        function (err, res) {
                            if (err) throw err;
                            console.log("Awesome! The inventory has been increased to " + quantity + ".");
                            runManager()
                        });
                }
            });
        });
}

function addProduct() {
    inquirer
        .prompt([
            {
                name: "product_name",
                type: "input",
                message: "What's the product name?",
            },
            {
                name: "department_name",
                type: "input",
                message: "What's the department name?",
            },
            {
                name: "price",
                type: "input",
                message: "What's the product price?",
            },
            {
                name: "stock_quantity",
                type: "input",
                message: "How many you would like to add?",
            }])
        .then(function (answer) {
            var query = connection.query(
                "INSERT INTO bamazondb.products SET ?",
                {
                    product_name: answer.product_name,
                    department_name: answer.department_name,
                    price: answer.price,
                    stock_quantity: answer.stock_quantity,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " product inserted!\n");
                    runManager()
                });
        });
}