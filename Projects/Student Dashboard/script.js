console.log("Student Performance Dashboard Started!");

const students = [];

function addStudent() {
    const nameInput = document.getElementById("name");
    const scoreInput = document.getElementById("score");

    const name = nameInput.value.trim();
    const score = Number(scoreInput.value);

    if (name === "" || isNaN(score)) {
        alert("Please enter a valid name and score.");
        return;
    }

    const status = score >= 40 ? "Pass" : "Fail";

    let grade;

    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        case score >= 40:
            grade = "E";
            break;
        default:
            grade = "F";
    }

    students.push({
        name,
        score,
        status,
        grade
    });

    displayStudents(students);

    nameInput.value = "";
    scoreInput.value = "";
}

function displayStudents(array) {
    const list = document.getElementById("list");

    list.innerHTML = "";

    array.forEach((student, index) => {
        list.innerHTML += `
        <li>
            <span class="${student.status === "Pass" ? "pass" : "fail"}">
                ${student.name} |
                ${student.score} |
                Grade ${student.grade} |
                ${student.status}
            </span>

            <button onclick="removeStudent(${index})">
                Delete
            </button>
        </li>
        `;
    });
}

function removeStudent(index) {
    students.splice(index, 1);
    displayStudents(students);
}

function showPassed() {
    const passedStudents = students.filter(student => student.score >= 40);
    displayStudents(passedStudents);
}

function showAll() {
    displayStudents(students);
}

function showStats() {
    let total = 0;

    for (let i = 0; i < students.length; i++) {
        total += students[i].score;
    }

    const average = students.length ? total / students.length : 0;

    const names = students.map(student => student.name);

    document.getElementById("stats").innerHTML = `
        <b>Total Students:</b> ${students.length}<br>
        <b>Average Score:</b> ${average.toFixed(2)}<br>
        <b>Students:</b> ${names.join(", ")}
    `;
}

var oldVariable = "Old JavaScript";
let age = 20;
const country = "Nepal";

let myNumber = 100;
let myString = "Hello";
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log("5" + 5);
console.log("5" - 5);

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);

if ("") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let x = 1;

while (x <= 5) {
    console.log(x);
    x++;
}

let y = 1;

do {
    console.log(y);
    y++;
} while (y <= 5);

for (let i = 1; i <= 30; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));

const square = number => number * number;

console.log(square(6));

{
    let inside = "Block Scope";
    console.log(inside);
}

const numbers = [10, 20, 30, 40, 50];

console.log(numbers);

numbers.push(60);
console.log(numbers);

numbers.pop();
console.log(numbers);

const sliced = numbers.slice(1, 4);
console.log(sliced);

numbers.splice(2, 1);
console.log(numbers);

numbers.forEach(num => console.log(num));

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const greaterThanTwenty = numbers.filter(num => num > 20);
console.log(greaterThanTwenty);

console.log("Project Loaded Successfully!");