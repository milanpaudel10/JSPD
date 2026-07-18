const numbers = [10, 15, 20, 25];

const sum = numbers
    .filter(num => num >= 20)
    .reduce((total, num) => total + num, 0);

console.log(sum);