/*
writing a promisified version of readFile
*/


// consider the below code as black box for now

const fs = require("fs");

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

function callback(data) {
    console.log(data)
}

function callbackErr() {
    console.log("error while reading the file");
}

fsReadFilePromisified("a.txt", "utf-8")
    .then(callback)
    .catch(callbackErr)
    

/*
    class Promise {
        constructor() {

        }

        then() {
    
        }

        catch() {
    
        }


    }

*/