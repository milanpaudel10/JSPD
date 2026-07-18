const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 400 },
    { name: "Tablet", price: 600 }
];

// map
console.log(products.map(product => product.name));

// filter
console.log(products.filter(product => product.price > 500));

// reduce
console.log(products.reduce((sum, product) => sum + product.price, 0));