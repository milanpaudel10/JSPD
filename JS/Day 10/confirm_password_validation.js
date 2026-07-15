const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Passwords match.");
});