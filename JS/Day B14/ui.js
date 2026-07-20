const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    btn.textContent = "Saved!";
    btn.classList.add("success");
});