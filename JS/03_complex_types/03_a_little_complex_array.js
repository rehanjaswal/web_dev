// function isLegal(user) {
//     if (user.age >= 18) console.log(user.name + " is allowed to vote")
//     else console.log(user.name + " is not allowed to vote")
// }

// let users = [
//     {
//     name: "rehan",
//     age: 19,
//     address : [
//         {
//             city: "manchester",
//             road: "sir matt busby road",
//             place: "old trafford, greater manchester",
//         }
//     ]
// },
//     {
//         name: "akshita",
//         age: 19,
//         address: [
//             {
//                 city: "zurich",
//                 area: "Bahnhofstrasse",
//                 pincode: "8001",
//             }   
//         ]  
//     }
//     ]

// console.log(users[0].address[0].place)

// for (let i = 0; i < users.length; i++) {
//     isLegal(users[i])
// }

// users.forEach(isLegal)  // better and a cleaner way to do this


//  method 2

function getLegalUsers(users) {
    let allowedUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18)
            allowedUsers.push(users[i]);
    }
    return allowedUsers;
}

let users = [
    {
    name: "rehan",
    age: 19,
    address : [
        {
            city: "manchester",
            road: "sir matt busby road",
            place: "old trafford, greater manchester",
        }
    ]
},
    {
        name: "akshita",
        age: 19,
        address: [
            {
                city: "zurich",
                area: "Bahnhofstrasse",
                pincode: "8001",
            }   
        ]  
    }
    ]

// console.log(getLegalUsers(users))   // log directly if you dont wanna store value

// if you wanna store its value, do this ->

let legalUsers = getLegalUsers(users)
console.log(legalUsers)

console.log(legalUsers[1]) // useful for this kinda shit
console.log(legalUsers.length)  // logs 2, as both users are legal
