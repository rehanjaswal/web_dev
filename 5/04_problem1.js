// Q: Write a function that

// 1. Reads the contents of a file
// 2. Trims the extra space from the left and right
// 3. Writes it back to the file


/// method 1: sync fn call


// const fs = require("fs")
// function cleanFileSync(fileName) {
// let contents = fs.readFileSync("a.txt", "utf-8")
// const trimmedContents = contents.trim()

// fs.writeFileSync(fileName, trimmedContents)
// }

// cleanFileSync("a.txt")

// ---------------------------------------------

/// method 2: callback based, async fn call

// const fs = require("fs");

// function cleanFile(fileName, afterDone) {
// fs.readFile(fileName, "utf-8", function(err, contents) {
//     const trimmedContents = contents.trim();
//     fs.writeFile(fileName, trimmedContents, function() {
//         afterDone();
//     })
// })
// }

// cleanFile("a.txt", () => console.log("done cleaning a.txt!"))

// --------------------------------------------------------------------


/// method 3: promisified version


// const fs = require("fs");

// function cleanFile(fileName) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(fileName, "utf-8", function(err, contents) {
//             if(err) {
//                 reject();
//             }
//             else {
//                 trimmedContents = contents.trim();
//                 fs.writeFile(fileName, trimmedContents, (err) => {
//                 if(err) {
//                     reject();
//                 }
//                 else {
//                     resolve();
//                 }})
//             }
//         })
//     })
// }

// cleanFile("a.txt")
//     .then(() => {console.log("done cleaning a.txt")})
//     .catch(() => console.log("error while cleaning a.txt"));


/// method 4: promisified, uses async-await

const fs = require("fs");

function cleanFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, contents) => {
            if(err) {
                reject();
            }
            else {
                const trimmedContents = contents.trim();
                fs.writeFile(fileName, trimmedContents, (err) => {
                    if(err) {
                        reject();
                    }
                    else {
                        resolve();
                    }
                })
            }
        })
    })
}

async function main() {
    try {
        await cleanFile("a.txt");
        console.log("done cleaning a.txt!");
    }
    catch(err) {
        console.log("error while cleaning the file");
    }
}

main();