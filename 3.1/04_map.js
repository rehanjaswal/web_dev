// given an array, multiply each element by 2 and log it 

// method 1

// let oldArray = [ 1, 2, 3, 4, 5 ]
// let newArray = [];


// for (let i = 0; i < oldArray.length; i++) {
//     newArray.push(oldArray[i] * 2);
// }

// console.log(newArray)

// method 2  (map)

input = [ 1, 2, 3, 4, 5 ];

// function transform(i) {
//     return i * 2;
// }

// const ans = input.map(transform)

// console.log(ans)



/// even better way to write 

const ans = input.map(function (i) {
    return i * 2;
});

console.log(ans)