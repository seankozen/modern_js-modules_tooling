// Importing Module
// import {addToCart} from './shoppingCart.js';
// import { shippingCost, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price, tq);
//addToCart('bread', 5);
//console.log(shippingCost);


// Import all from module
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('sausage', 5);

// console.log(ShoppingCart.tq);

// Don't mix named exports and default exports in the same module
import add from './shoppingCart.js';

add('pizza', 5);
add('bread', 5);
add('apples', 10);

