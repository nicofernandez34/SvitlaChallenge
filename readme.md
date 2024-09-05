/*Steps to execute tests*/


(If you have NodeJS and Visual Studio Code already installed skip to step 3)

1- Download and install NodeJS for your operating system: https://nodejs.org/en/download/

2- Download and install Visual Studio Code for your operating system: https://code.visualstudio.com/

3- Start Visual Studio Code and clone the repository

4- Open the terminal and install the project's dependencies using: npm install

5- Run the tests using: npx wdio run wdio.conf.js


/*Test Scenarios description*/


Tests are located on the folder test->specs

Tests are divided into 4 files:

CartTests:

Add items to cart: Tests adding items to the cart from both the invnetory and the item pages

Remove items from cart: Tests removing items from the cart from the inventory, item and cart pages



CheckoutTests:

Checkout cart: Tests filling a cart and checking out said cart

Cancel checkout: Tests filling a cart and then cancelling the checkout 

Validate information errors: Tests the errors the checkout page shows when leaving blank fields


InventoryItemsTest

Check that items are visible: Opens all the items on the inventory pages and checks that they are visible


LoginTest

Login with valid credentials: Tests that the application can be accessed using a valid username and password

Login with invalid credentials: Tests that the application cannot be accessed using invalid or missing username and password