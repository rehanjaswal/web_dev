// Write a function called sum that finds the sum from 1 to a number

function sum(n) {
    let ans = 0
    for (let i = 1; i <= n; i++) {
        ans += i
    }
    return ans
}

console.log(sum(5))

// method 2, no loop required

function sumX(n) {
    return n * (n + 1) / 2
}

console.log(sumX(5))