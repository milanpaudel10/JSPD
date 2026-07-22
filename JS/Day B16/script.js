// Named Imports
import { add, subtract, multiply } from "./math.js";

// Default Import
import greet from "./greet.js";

// Object Import
import { student } from "./student.js";

// Function Calls
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));

greet(student.name);

console.log(student);