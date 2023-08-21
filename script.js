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

console.log('Start');

// Top level await (in modules only) blocks execution of entire 
// module which can be harmful to loadtime

// const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    const data = await res.json();
    //console.log(data);
    return {title: data.at(-1).title, text: data.at(-1.).body};
};

const lastPost = getLastPost();

// Not clean
//lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);