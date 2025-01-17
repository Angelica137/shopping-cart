/* INSTRUCTIONS: Create an array named products which you will use to add all of your product object 
literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

//👉 I created a class to not repeat over and over
class Product {
  constructor(productId, name, price, quantity, image) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
  }
}

//👉  I used object lterals because that was the instruction
const cherry = new Product(1, "Carton of Cherries", 4, 0, "images/cherry.jpg");
const orange = new Product(2, "Bag of Oranges", 10, 0, "images/orange.jpg");
const strawberry = new Product(
  3,
  "Carton of Strawberries",
  10,
  0,
  "images/strawberry.jpg"
);

//👉  I had to move this because I was having hoisting issues

let products = [cherry, orange, strawberry];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  //create a variable to look for the product in the cart array and store its location
  const existingProductIndex = cart.findIndex(
    (item) => item.productId === productId
  );
  //if the product exists, we access the index directly and increase its quantity
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    //else, we look for the product in the the product array. If it exists it is pushed into the cart array
    const product = products.find((item) => item.productId === productId);
    if (product) {
      cart.push({ ...product, quantity: 1 });
    }
  }
  return cart;
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
