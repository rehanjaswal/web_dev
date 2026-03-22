const fs = require("fs");

function fileReadCallback(err, contents) {
    console.log(contents);
}

fs.readFile("a.txt", "utf-8", fileReadCallback);

let i = 0;
for (i = 0; i < 100; i++) {
    i += 1;
}

console.log(i)


// another example

r = 7
m = 10

console.log(r)
console.log(m)

// wait for one second

// let beforeTime = Date.now()
// for (i = 0; i < 10000000000000000000000; i++) {
//     let nowTime = Date.now();
//     if (nowTime - beforeTime >= 1000) {     // time in ms by default
//         break;
//     }
// }

// // now log their sum 

// console.log(r + m)


// but notice how i'm asking the cpu to run to not do anything
// doing a task to not do anything but wait for one second (busy wait)
// instead i can use setTimeout()
function callback() {
    console.log(r + m);
}

setTimeout(callback, 1000);

