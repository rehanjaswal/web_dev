function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function operation(a, b, fn) {
    return fn(a, b);
}

console.log(operation(7, 10, sum))
console.log(operation(7, 10, sub))