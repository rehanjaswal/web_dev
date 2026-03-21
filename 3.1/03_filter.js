/// given an array, return only even numbers from that array

// const arr = [1, 2, 3, 4, 5, 6]
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr)

/// filtering

// const arr = [1, 2, 3, 4, 5, 6]

// function filterLogic(n) {
//     if (n % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const ans = arr.filter(filterLogic)
// console.log(ans)


/// a better way to write this is: as always, defining the fn inside

// const arr = [1, 2, 3, 4, 5, 6]

// const ans = arr.filter(function filterLogic(n) {
//     if (n % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(ans)


/// even better, use arrow fn inside it (anonymous fn)

const arr = [1, 2, 3, 4, 5, 6]

const ans = arr.filter((n) => {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});

console.log(ans)