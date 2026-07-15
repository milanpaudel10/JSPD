const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const age = document.querySelector("#age").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
});