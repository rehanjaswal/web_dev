// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
function sum(a, b) {
    return a + b;
}

console.log("sum =",sum(5,3))
console.log(sum("5",3)) // in js + means addition and string concatenation too, so if one parameter is a string the other becomes a string too
// thistle log 53 and not 8