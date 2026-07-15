
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const age = document.querySelector("#age").value;

    if (name === "" || email === "" || age === "") {
        alert("Please fill in all fields.");
        return;
    }

    console.log(name, email, age);
});