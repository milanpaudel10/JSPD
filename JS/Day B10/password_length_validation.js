const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = document.querySelector("#password").value;

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    alert("Password accepted.");
});