const btn = document.querySelector("button");

btn.addEventListener("click", () => {

    const p = document.createElement("p");

    p.textContent = "New Paragraph";

    p.classList.add("text");

    document.body.appendChild(p);

});