// write a function that takes a prefix as an input, say a
// and cleans prefix1.txt, prefix2.txt, prefix3.txt

const fs = require("fs");
function cleanFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, "utf-8", function(err, contents) {
            if(err) {
                reject();
            }
            else {
                const trimmedContents = contents.trim();
                fs.writeFile(fileName, trimmedContents, function(err) {
                    if(err) {
                        console.log("error while cleaning the file:", err)
                    }
                    else {
                        resolve();
                    }
                })
            }
        })
    })
}

// function cleanManyFiles(prefix) {
//     return new Promise(async function(resolve, reject) {
//         try {
//             await cleanFile(prefix + "1.txt")
//             await cleanFile(prefix + "2.txt")
//             await cleanFile(prefix + "3.txt")
//             resolve();
//         }
//         catch(err) {
//             reject();
//         }
//     })
// }

/// better way to write cleanManyFiles: 

async function cleanManyFiles(prefix) {
    await cleanFile(prefix + "1.txt")
    await cleanFile(prefix + "2.txt")
    await cleanFile(prefix + "3.txt")
}

cleanManyFiles("a")
    .then(() => {console.log("all three files have been cleaned!")})
    .catch((err) => console.log("error while cleaning the files:", err))