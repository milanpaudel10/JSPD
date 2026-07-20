const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;

    if (name === "") {
        alert("Enter your name");
        return;
    }

    const user = { name };

    localStorage.setItem("user", JSON.stringify(user));

    console.log(user);
});