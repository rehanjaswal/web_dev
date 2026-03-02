// given an array, log only the even values

// const input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// // solution

// let newArray = [];

// for (let i = 0; i < input.length; i++) {
//     if(input[i] % 2 == 0) {
//         newArray.push(input[i]);
//     }
// }

// console.log(newArray)

const arr = [ 1, 2, 3, 4, 5, 6 ]

const ans = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});

console.log(ans);