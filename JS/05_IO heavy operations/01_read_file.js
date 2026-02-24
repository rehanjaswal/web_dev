const fs = require("fs")

const contents = fs.readFileSync("a.txt", "utf-8")   // ("file name", "encoding")
console.log(contents)