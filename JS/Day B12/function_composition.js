const double = num => num * 2;
const square = num => num * num;

const result = square(double(5));

console.log(result);