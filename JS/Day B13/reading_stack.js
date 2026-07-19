
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log(x); // Error
}

first();