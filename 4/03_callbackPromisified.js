/*
writing a promisified version of setTimeout()
*/
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
  console.log("hi there!")
}

setTimeoutPromisified(3000).then(callback);

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