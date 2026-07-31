/// method 1, synchronous
// const fs = require("fs");
// function cleanFile(fileName, encoding) {
//     let contents = fs.readFileSync(fileName, encoding);
//     let trimmedContents = contents.trim();
//     fs.writeFileSync(fileName, trimmedContents);
// }
// cleanFile("sample.txt", "utf-8");

/// method 2, asynchronous

// const fs = require("fs");
// function cleanFile(fileName, afterDone) {
//     fs.readFile(fileName, "utf-8", (err, contents) => {
//         const trimmedContents = contents.trim();  
//         fs.writeFile(fileName, trimmedContents, () => {
//             afterDone();
//         })
//     })
// }

// cleanFile("sample.txt", () => {
//     console.log(`done cleaning`)
// })  

/// method 3, promisified

// const fs = require("fs");
// function cleanFile(fileName) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, "utf-8", (err, contents) => {
//             if(err) {
//                 reject();
//             }
//             else {
//                 const trimmedContents = contents.trim();
//                 fs.writeFile(fileName, trimmedContents, (err) => {
//                     if(err) {
//                         reject();
//                     }
//                     else {
//                         resolve();
//                     }
//                 })
//             }
//         })
//     })
// }

// cleanFile("dwd.txt")
//     .then(() => {console.log(`file has been cleaned!`)})
//     .catch(() => {console.log(`error while cleaning the file`)})


/// method 3, async await

const fs = require("fs");
function cleanFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, contents) => {
            if(err) {
                reject();
            }
            else {
                let trimmedContents = contents.trim();
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
        await cleanFile("sample.txt");
        console.log(`done cleaning the file mate`)
    }
    catch(error) {
        console.log(`error while cleaning the file`);
    }
}

main();