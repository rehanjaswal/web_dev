// Write a function called canVote that returns true or false if the age of a user is > 18
// function canVote(age) {
//     if(age > 18) return true
//     else return false
// }
// an even better way to write this ->
function canVote(age) {
    return age > 18
}

let userAge = 21
console.log(canVote(userAge))