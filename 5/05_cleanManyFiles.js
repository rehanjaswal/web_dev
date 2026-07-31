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

// function cleanManyFiles(prefix) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await cleanFile(prefix + "1.txt");
//             await cleanFile(prefix + "2.txt");
//             await cleanFile(prefix + "3.txt");
//             resolve();
//         }
//         catch(e) {
//             reject();
//         }
//     })
// }

// even better way to write this -> 
async function cleanManyFiles(prefix) {
    await cleanFile(prefix + "1.txt");
    await cleanFile(prefix + "2.txt");
    await cleanFile(prefix + "3.txt");
}

cleanManyFiles("x")
    .then(() => {
        console.log(`done cleaning the files`);
    })
    .catch(() => {
        console.log(`error while cleaning the files`);
    })  