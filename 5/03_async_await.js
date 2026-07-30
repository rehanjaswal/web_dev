const fs = require("fs");
function fsReadFilePromisified(fileName, encoding) {
    return new Promise((resolve, reject) => {
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
    let file_a = await fsReadFilePromisified("a.txt", "utf-8")
    let file_b = await fsReadFilePromisified("b.txt", "utf-8")
    let file_c = await fsReadFilePromisified("c.txt", "utf-8")
    
    console.log(file_a);
    console.log(file_b);
    console.log(file_c);
}

main();
console.log(`this mofo should get logged first`);