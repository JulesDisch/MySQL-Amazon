# MySQL-Amazon
It's Amazon. . .in Space!
Here we have a basic CLI application, representative of a storefront. We make use of javaScript, Node.js, and MySql.
I decided to have a little fun with it, and so in this store, you can buy an assortment of astronomical objects.
## Customer
All experiences:
    When a user first enters the store, they are presented with a list of all possible products.
    The user is then prompted with "What is the ID of the product you would like to buy?"

Successful purchase experience:
    1.  Once the user enters a number, they will see a message confirming their selection, and it will tell them how many we have in stock.
    2.  Then, they will be asked how many they would like to buy.
    3.  If the user selects an amount that is less than or equal to the amount in stock, they will be allowed to buy.
    4.  If the user is allowed to buy, they will be told the cost, and asked to confirm if they want to buy.
    5.  If they confirm, they will be told they have been charged.
    6.  The user will then be asked if they would like to buy something else.
    7.  If they confirm, the purchase experience will run again.

[Screenshot of entire experience for user who successfully purchases](assets/screenshots/successfulPurchase.png)

Completely deleted stock experience:
    1.  If a stock is completely depleted, the user will see "Sorry, fresh out!" when they select that product's ID.
    2.  They will be asked if they would like to buy something else.
    3.  If they confirm, the purchase experience will run again.
    [In the provided screenshot, the user cannot purchase Antares because we have already depleted the stock in the first experience.](assets/screenshots/completelyDepleted.png)

Selecting a greater amount than the stock experience:
    1.  If the user selects a greater amount of a product than what's in stock, the app will tell them that is more than we have.
    2.  Then, it will ask if they would like to update the quantity.
    3.  If they confirm, it will again ask them how many they would like to buy.
    Alternatively:
    4.  If they decline, it will tell them to check back later for new inventory.
    5.  It will ask if they want to buy another item.
    [Screenshot of greater than stock experience](assets/screenshots/greaterStock.png)

Final experience:
    1.  When the user declines "Would you like to buy something else?", they see the message "That's ok! See you next time!"
    2.  The app is now finished; we can start a new bash command.
    [Screenshot](assets/screenshots/finalExperience.png)

## Manager
For the manager experience, we utilize switch cases, accessible from the choices for our initial inquirer prompt.
    Different from the customer experience, all of our options are immediately visible: "View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", and "Exit".
    1.  "View Products for Sale" shows our whole store.
    2.  "View Low Inventory" shows our stock levels for products with fewer than five.
    3.  "Add to Inventory" lets the user update the stock levels for a product already in the system.
    4.  "Add New Product" lets the user add an entirely new product.
        a.  Shows how the new product has been added to the inventory.
    5.  "Exit" causes the app to finish.
    [Screenshot](assets/screenshots/manager.png)



