let ctr = 0;
function callback() {
    console.log(ctr)
    ctr += 1;
}

setInterval(callback, 1000);

let i = 0;
for (i = 0; i < 9999999999; i++) {
    i += 1;
}

console.log(i)
