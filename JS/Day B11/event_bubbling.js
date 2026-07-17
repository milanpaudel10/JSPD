const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
    console.log("Parent Clicked");
});

child.addEventListener("click", () => {
    console.log("Child Clicked");
});