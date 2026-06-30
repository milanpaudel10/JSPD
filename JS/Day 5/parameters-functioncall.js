// JavaScript Function with Multiple Parameters

function studentDetails(name, age, course, marks1, marks2, marks3) {
    let total = marks1 + marks2 + marks3;
    let average = total / 3;
    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("----- Student Report -----");
    console.log("Name      : " + name);
    console.log("Age       : " + age);
    console.log("Course    : " + course);
    console.log("Marks 1   : " + marks1);
    console.log("Marks 2   : " + marks2);
    console.log("Marks 3   : " + marks3);
    console.log("Total     : " + total);
    console.log("Average   : " + average.toFixed(2));
    console.log("Grade     : " + grade);

    return {
        name: name,
        total: total,
        average: average,
        grade: grade
    };
}

// Function Call
let student = studentDetails(
    "Milan",
    20,
    "BCA",
    85,
    78,
    92
);

console.log(student);