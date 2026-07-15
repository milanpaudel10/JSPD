// JavaScript slice() Examples

// Example 1: Basic slice
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let result1 = fruits.slice(1, 4);
console.log(result1); // ["Banana", "Mango", "Orange"]

// Example 2: Slice from a starting index
let result2 = fruits.slice(2);
console.log(result2); // ["Mango", "Orange", "Grapes"]

// Example 3: Negative index
let result3 = fruits.slice(-2);
console.log(result3); // ["Orange", "Grapes"]

// Example 4: Copy an array
let copy = fruits.slice();
console.log(copy); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// Original array is unchanged
console.log(fruits);

// Example 5: String slice
let text = "JavaScript";

console.log(text.slice(0, 4));   // Java
console.log(text.slice(4));      // Script
console.log(text.slice(-6));     // Script