let student = {
    name: "Milan",
    age: 20,
    country: "Nepal",
    hobbies: [
        "Coding",
        "Cricket",
        "Football"
    ],
    marks: {
        HTML: 90,
        CSS: 88,
        JavaScript: 95
    }
};

document.getElementById("create").addEventListener("click", () => {
    localStorage.setItem("student", JSON.stringify(student));
    console.log("Profile Saved");
});

document.getElementById("show").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("student"));
    console.log(data);
});

document.getElementById("update").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("student"));

    if (data) {
        data.age++;
        localStorage.setItem("student", JSON.stringify(data));
        console.log("Age Updated");
    }
});

document.getElementById("delete").addEventListener("click", () => {
    localStorage.removeItem("student");
    console.log("Profile Deleted");
});