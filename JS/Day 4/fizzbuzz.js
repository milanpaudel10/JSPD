function myFunction(number, current = 1, results = []) {
    if (current > number) {
        return results;
    }

    let output = [];
    if (current % 3 === 0) output.push('Fizz');
    if (current % 5 === 0) output.push('Buzz');

    if (output.length === 0) {
        results.push(current);
    } else {
        results.push(output.join(''));
    }

    return myFunction(number, current + 1, results);
}

const fizzBuzzArray = myFunction(15);
console.log(fizzBuzzArray);