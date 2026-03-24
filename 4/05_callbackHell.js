// callback hell

// setTimeout(function() {
//     console.log("hi");
//     setTimeout(function() {
//         console.log("hello");
//     setTimeout(function() {
//         console.log("hi there");
//     }, 3000)
//     }, 2000)
// }, 1000)

// a better way to write this is using Promise

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000)
    .then(() => {
        console.log("hi");
        return setTimeoutPromisified(2000);
    })
    .then(() => {
        console.log("hello");
        return setTimeoutPromisified(3000);
    })
    .then(() => {
        console.log("hi there");
    })