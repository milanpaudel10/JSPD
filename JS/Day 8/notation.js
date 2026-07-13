const player = {
    name: "Milan",
    age: 20,
    country: "Nepal"
};

console.log(player.name);
console.log(player["name"]);

const key = "country";

console.log(player[key]);

player["team"] = "Nepal";
player.city = "Pokhara";

console.log(player);