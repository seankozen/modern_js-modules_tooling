// Importing Module
// import {addToCart} from './shoppingCart.js';
// import { shippingCost, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price, tq);
//addToCart('bread', 5);
//console.log(shippingCost);
import './node_modules/core-js/actual';

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
      {product: 'bread', quantity: 5},
      {product: 'pizza', quantity: 5},
    ],
    user: {loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);



// import { shippingCost } from "./shoppingCart";

// import shoppingCart from "./shoppingCart";

// Import all from module
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('sausage', 5);

// console.log(ShoppingCart.tq);

// Don't mix named exports and default exports in the same module
import add, { cart } from './shoppingCart.js';

add('pizza', 5);
add('bread', 5);
add('apples', 10);

// console.log('Start');

// // Top level await (in modules only) blocks execution of entire
// // module which can be harmful to loadtime

// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     //console.log(data);
//     return {title: data.at(-1).title, text: data.at(-1.).body};
// };

// const lastPost = getLastPost();

// // Not clean
// //lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//////////////////////////////////////
// Old Module pattern
//////////////////////////////////////


const ShoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizzas', 4);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);  // Made private by not returning


if(module.hot) {
  module.hot.accept();
};

class Person {
  greeting = 'Hi';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, {this.name}`);
  }
}

const sean = new Person('Sean');


console.log(cart.find(el => el.quantity >=2));
Promise.resolve('TEST').then(x => console.log(x));

