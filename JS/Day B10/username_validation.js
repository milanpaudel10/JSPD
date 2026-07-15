const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;

    if (username.length < 5) {
        alert("Username must contain at least 5 characters.");
        return;
    }

    alert("Username accepted.");
});