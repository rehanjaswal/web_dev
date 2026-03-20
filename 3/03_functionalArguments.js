function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function doOperation(a, b, operation) {
    return operation(a, b);
}

console.log(doOperation(10, 7, sum))
console.log(doOperation(10, 7, sub))