// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data)
//     }
// });

/// now let me write the promisified version of readFile

const fs = require("fs");

function readFilePromise(fileName, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, encoding, function(err, data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

readFilePromise("a.txt", "utf-8")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    })