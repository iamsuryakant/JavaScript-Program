// Exporting module

console.log('Exporting module');

const shippingCart = 10;
const cart = [];


export const addToCart = function(product, quantity){
  cart.push({product, quantity});

  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 238;
const totalQuantity = 23;

export {totalPrice, totalQuantity};


export default function(product, quantity){
  cart.push({product, quantity});

  console.log(`${quantity} ${product} added to cart`);
};


