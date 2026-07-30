function setTimeoutPromisified(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, delay);
    })
}
setTimeoutPromisified(3000)
    .then(function() {
        console.log(`three seconds have passed`);
    })