const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const age = Number(document.querySelector("#age").value);

    if (name === "") {
        alert("Enter your name.");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    if (age < 18) {
        alert("Age must be 18 or above.");
        return;
    }

    console.log({
        name,
        email,
        password,
        age
    });

    alert("Form submitted successfully!");
});