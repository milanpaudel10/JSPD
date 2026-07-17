const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    console.log(name);
});