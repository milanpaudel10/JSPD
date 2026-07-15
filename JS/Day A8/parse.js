const json = '{"name":"Milan","country":"Nepal","runs":500}';

const player = JSON.parse(json);

console.log(player);
console.log(player.name);
console.log(player.country);
console.log(player.runs);