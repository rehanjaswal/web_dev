/*
writing a promisified version of setTimeout()
*/
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));           // consider it a black box as of now
}

function callback() {
    console.log("hello there!");
}

setTimeoutPromisified(3000).then(callback);
