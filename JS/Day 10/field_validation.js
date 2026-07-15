const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    if (name === "") {
        alert("Name is required.");
        return;
    }

    alert("Form submitted successfully!");
});