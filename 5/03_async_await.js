const fs = require("fs");

function readFilePromise(fileName, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, encoding, (err, data) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

async function main() {
    let file1Contents = await readFilePromise("a.txt", "utf-8")
    let file2Contents = await readFilePromise("b.txt", "utf-8")
    let file3Contents = await readFilePromise("c.txt", "utf-8")

    console.log(file1Contents)
    console.log(file2Contents)
    console.log(file3Contents)
}

main();

console.log("shabbat shalom my nigga");