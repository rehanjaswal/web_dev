function canVote(age) {
    if (age >= 18) return "you can vote"
    else return " you can not vote"
}
let userAge = 17
console.log(canVote(userAge));