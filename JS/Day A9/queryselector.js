const heading = document.querySelector("h1");
console.log(heading);

const button = document.querySelector("#btn");
console.log(button);

const paragraph = document.querySelector(".text");
console.log(paragraph);

button.addEventListener("click", () => {
    heading.textContent = "JavaScript is Awesome!";
});