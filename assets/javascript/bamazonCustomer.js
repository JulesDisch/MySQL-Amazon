var mysql = require("mysql");
var inquirer = require("inquirer");
var choice;
var quantity;
var price;
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Antares78*",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM products", function(err, res){
      if (err) throw err;
      console.log("Welcome to the Space Store! Here are all available products:")
      for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].id, res[i].name, res[i].product_name, res[i].department, res[i].department_name+ " |", "Price: $"+ res[i].price);}
      runProgram();
    });
});
    
function runProgram() {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "What is the ID of the product you would like to buy?",
    })
    .then(function(answer) {
      var query = "SELECT * FROM products WHERE ?";
      connection.query(query, { id: answer.id }, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
        if (res[i].stock_quantity === 0) {console.log("Sorry, fresh out!"); BuyAnother()}
        else {
          console.log("You have selected " + res[i].product_name + ". There is/are " + res[i].stock_quantity + " available." );
          choice = answer.id;
          price = res[i].price;
          howMany();
        }
      }});
})};

function howMany() {
    inquirer
      .prompt({
        name: "stock_quantity",
        type: "input",
        message: "How many you would like to buy?",
      })
      .then(function(answer) {
        var query = "SELECT * FROM products WHERE ?";
        connection.query(query, { id: choice }, function(err, res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
              if (answer.stock_quantity <= res[i].stock_quantity) {
                console.log("Congratulations, you can buy!");
               quantity = res[i].stock_quantity - answer.stock_quantity;
               price = answer.stock_quantity * price;
                Buy ();
              }
              else { console.log("Sorry, that's more than we have!");
              ChangeQuantity();
            }
          } 
        });
  })}
  function Buy (){
      console.log("It costs: $" + price + ".")
    inquirer
    .prompt({
      name: "Buy",
      type: "confirm",
      message: "Are you sure?", 
      default: true
    })
    .then(function(answer) {
        if (answer.Buy) { 
        var query = connection.query("update bamazondb.products set ?  where ?",
        [
            {stock_quantity: quantity},
            {id: choice}
        ],
            function(err, res) {
            if (err) throw err;
            console.log ("Awesome! Your account has been charged $" + price + "."); BuyAnother();
        });}
        else {console.log("That's ok! It's a lot of money!"); BuyAnother();
    }
        
      });
  };

  function BuyAnother () {
    inquirer
    .prompt({
      name: "BuyAnother",
      type: "confirm",
      message: "Would you like to buy something else?", 
      default: true
    })
    .then(function(answer) {
        if (answer.BuyAnother) { 
        runProgram()
        }
        else {console.log("That's ok! See you next time!");
        connection.end();
    }
        
      });
  };

  function ChangeQuantity () {
    inquirer
    .prompt({
      name: "ChangeQuantity",
      type: "confirm",
      message: "Would you like to change your quantity?", 
      default: true
    })
    .then(function(answer) {
        if (answer.ChangeQuantity) { 
       howMany()
        }
        else {console.log("Sorry. Check back next millennium for updated inventory!");
        BuyAnother();
    }  
      });
  };
  