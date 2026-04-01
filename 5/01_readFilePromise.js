const fs = require("fs");

function fsReadFilePromisified(fileName, encoding) {
    return new Promise (function(resolve, reject) {
        fs.readFile(fileName, encoding, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

fsReadFilePromisified("a.txt", "utf-8")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    })