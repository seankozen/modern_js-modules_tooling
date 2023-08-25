// Exporting Module

//Blocking code
// console.log('Start fetching users.');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetch');


export const shippingCost = 10;
export const cart = [];

 export const addToCart = (product, quantity) => {
    cart.push({product, quantity});
    console.log((`${quantity} ${product} added to cart`));
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq, addToCart as add};

export default function (product, quantity) {
    cart.push({product, quantity});
    console.log((`${quantity} ${product} added to cart`));
};

console.log(cart);