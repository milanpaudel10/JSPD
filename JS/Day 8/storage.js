const player = {
    name: "Milan",
    country: "Nepal",
    score: 95
};

document.getElementById("save").addEventListener("click", () => {
    localStorage.setItem("player", JSON.stringify(player));
    console.log("Data Saved");
});

document.getElementById("load").addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("player"));
    console.log(data);
});

document.getElementById("remove").addEventListener("click", () => {
    localStorage.removeItem("player");
    console.log("Data Removed");
});