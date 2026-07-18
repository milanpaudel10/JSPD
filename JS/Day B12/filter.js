const students = [
    { name: "Milan", marks: 80 },
    { name: "Ram", marks: 70 },
    { name: "Sita", marks: 90 }
];

const toppers = students.filter(student => student.marks >= 80);

console.log(toppers);