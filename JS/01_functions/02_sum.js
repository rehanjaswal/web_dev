// sum of 1 to n

// function sum(n) {
//     ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }
// console.log(sum(5))


// even better method -> sum of first n numbers is n * (n + 1) / 2

function sum(n) {
    return n * (n + 1) / 2;
}
console.log(sum(5))