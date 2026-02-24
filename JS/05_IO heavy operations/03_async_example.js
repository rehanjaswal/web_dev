const a = 7
const b = 10

console.log(a)
console.log(b)

function callBack() {
    console.log(a + b);
}

// wait for two seconds and log their sum

// let beforeTime = Date.now();
// for (let i = 0; i < 10000; i++) {
//     let currentTime = Date.now();
//     if (currentTime - beforeTime >= 2000) {
//         break;
//     }
// }                                                this is a very trash way

// better way incoming

setTimeout(callBack, 2000)   // (fn name, time (in ms))