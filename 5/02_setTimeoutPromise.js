// setTimeout(() => console.log("hi there"), 1000)

/// now its promisified version: 

function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) =>
    setTimeout(() => resolve(), delay))
}

setTimeoutPromise(2000)
    .then(() => console.log("2 seconds have passed"));