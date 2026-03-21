/// given an array, return a new array with all values doubled

// const input = [1, 2, 3, 4, 5]
// const newArray = []

// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2);
// }

// console.log(newArray)                                        

/// map method 

// function transform(i) {
//     return i * 2;
// }

// input = [1, 2, 3, 4, 5]

// const ans = input.map(transform)

// console.log(ans)

/// or just define the function inside the map

input = [1, 2, 3, 4, 5]

const ans = input.map(function(i) {
    return i * 2;
})

console.log(ans)