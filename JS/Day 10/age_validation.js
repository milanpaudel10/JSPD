const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const age = Number(document.querySelector("#age").value);

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    alert("Access granted.");
});