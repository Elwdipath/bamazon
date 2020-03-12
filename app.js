let mysql = require('mysql');
let inquirer = require('inquirer');
let bill = 0;

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user:"root",
    password:"jdk43110",
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database")
    start()
    startInquirer()
  });
  function start (){

    connection.query("SELECT * FROM products", function(err, results){
      if (err) throw err
      results.forEach(query => {
        console.log("------------------------------------")
        console.log("Item ID: " + query.item_id);
        console.log("Product Name: " + query.product_name);
        console.log("Department " + query.department_name);
        console.log("Price " + query.price);
        console.log("Stock: " + query.stock_quantity);
      });
    })
  }

  function startInquirer (){
    connection.query("SELECT * FROM products", function(err, results){
      inquirer
        .prompt([
          {
            name: "choice",
            type: "input",
            message: "Using the item ID, which item would you like to buy?"
          },
          {
            name:"amount",
            type: "input",
            message: "How many would you like to buy?"
          }
        ]).then(function(answer){
          var selectedItem;
          // console.log(results)
          // console.log(answer.choice)
          for (i=0; i<results.length;i++){
            if (results[i].item_id === parseInt(answer.choice))
            selectedItem = results[i];
            console.log(selectedItem)
          }
          if (selectedItem.stock_quantity > parseInt(answer.amount)){
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: (selectedItem.stock_quantity - parseInt(answer.amount))
                },
                {
                  item_id: selectedItem.item_id
                }
              ],
              function (err) {
                if (err) throw err;
    
                // update shoppers total
                bill += parseInt(answer.amount) * (selectedItem.price).toFixed(2);
                // display shoppers total
                console.log("Your total is $" + bill);
    
                
              }
            )
          }
        })
    })
  }