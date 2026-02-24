function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// function doArithmetic(a, b, operation) {
//     if (operation == "sum") return sum(a, b);
//     if (operation == "sub") return sub(a, b);
// }

// console.log(doArithmetic(10,7,"sum"))
// console.log(doArithmetic(10,7,"sub"))

function doArithmetic(a, b, fn) {
    return fn(a, b);
}

const p = doArithmetic(10, 7, sum)
const q = doArithmetic(10, 7, sub)

console.log(p)
console.log(q)