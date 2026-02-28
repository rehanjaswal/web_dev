let counter = 0;

function callBack() {
    console.log(counter);
    counter += 1;
}

setInterval(callBack, 1000)   // call this function EVERY one second, this is different from setTimeout (this calls the function right AFTER the assigned time)

let x = 0;
for (let i = 0; i < 50; i++) {
    x = x + i;
}

console.log(y)