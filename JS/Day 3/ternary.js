

let name = "Milan";
let age = 20;
let marks = 75;
let isLoggedIn = true;
let balance = 5000;
let temperature = 32;
let number = 7;
let attendance = 85;
let experience = 2;
let password = "12345";

console.log(name ? "Name Available" : "Name Missing");

console.log(age >= 18 ? "Adult" : "Minor");

console.log(marks >= 40 ? "Pass" : "Fail");

console.log(isLoggedIn ? "Welcome User" : "Please Login");

console.log(balance > 0 ? "Balance Available" : "No Balance");

console.log(temperature > 30 ? "Hot Weather" : "Cool Weather");

console.log(number % 2 === 0 ? "Even Number" : "Odd Number");

console.log(attendance >= 80 ? "Eligible for Exam" : "Not Eligible");

console.log(experience >= 3 ? "Senior Employee" : "Junior Employee");

console.log(password.length >= 8 ? "Strong Password" : "Weak Password");

let grade =
  marks >= 90 ? "A+" :
  marks >= 80 ? "A" :
  marks >= 70 ? "B" :
  marks >= 60 ? "C" :
  marks >= 40 ? "D" :
  "F";

console.log("Grade:", grade);

let votingStatus = age >= 18 ? "Can Vote" : "Cannot Vote";
console.log(votingStatus);

let discount = balance >= 5000 ? "20% Discount" : "No Discount";
console.log(discount);

let result = marks >= 40 ? "Congratulations!" : "Try Again!";
console.log(result);