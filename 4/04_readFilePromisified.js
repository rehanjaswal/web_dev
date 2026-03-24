// writing a promisified version of readFile (async)

// consider the below code as black box for new Promise((resolve, reject) => {
    
function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

const fs = require("fs");

function callback(data) {
    console.log(data)
}

function callbackErr() {
    console.log("error while reading the file");
}

fsReadFilePromisified("a.txt", "utf-8")
    .then(callback)
    .catch(callbackErr)