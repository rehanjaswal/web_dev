const fs = require("fs");

function fileReadCallback(err, content) {
    console.log(content);
}

fs.readFile("a.txt", "utf-8", fileReadCallback)

let s = 0;

for (let i = 0; i < 100; i++) {
    s += i;
}

console.log(s)

