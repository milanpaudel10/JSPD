let name = "Milan";

if (name) {
    console.log("Name exists"); // Runs because "Milan" is truthy
}

let age = 0;

if (age) {
    console.log("Age exists");
} else {
    console.log("Age is falsy"); // Runs because 0 is falsy
}