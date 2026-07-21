const student = {
    name: "Milan",
    age: 20,
    marks: [80, 90, 95]
};

const { name, age } = student;

const allMarks = [...student.marks, 100];

console.log(`${name} is ${age} years old.`);
console.log(allMarks);
console.log(student.address?.city);