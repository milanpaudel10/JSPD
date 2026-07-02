let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"]

console.log(fruits)

fruits.splice(2, 1)
console.log(fruits)

fruits.splice(1, 0, "Pineapple")
console.log(fruits)

fruits.splice(3, 2, "Kiwi", "Papaya")
console.log(fruits)

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (num) {
  console.log("forEach:", num)
})

let doubled = numbers.map(function (num) {
  return num * 2
})

console.log(doubled)

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0
})

console.log(evenNumbers)

let students = [
  { name: "Ram", marks: 85 },
  { name: "Sita", marks: 42 },
  { name: "Hari", marks: 67 },
  { name: "Gita", marks: 38 }
]

students.forEach(function (student) {
  console.log(student.name, student.marks)
})

let names = students.map(function (student) {
  return student.name
})

console.log(names)

let passedStudents = students.filter(function (student) {
  return student.marks >= 50
})

console.log(passedStudents)