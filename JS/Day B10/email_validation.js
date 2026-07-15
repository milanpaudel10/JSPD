const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value;

    if (!email.includes("@")) {
        alert("Invalid email address.");
        return;
    }

    alert("Valid email!");
});