// Array Example
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"];

document.getElementById("original").innerHTML =
"Original Array: " + fruits;

const part1 = fruits.slice(1, 4);
document.getElementById("result1").innerHTML =
"slice(1, 4): " + part1;

const part2 = fruits.slice(3);
document.getElementById("result2").innerHTML =
"slice(3): " + part2;

const part3 = fruits.slice(-2);
document.getElementById("result3").innerHTML =
"slice(-2): " + part3;

// String Example
const text = "JavaScript";

const newText = text.slice(4);

document.getElementById("string").innerHTML =
'text.slice(4): "' + newText + '"';