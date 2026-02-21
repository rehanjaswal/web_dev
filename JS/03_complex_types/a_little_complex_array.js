// 


// method 2 (returning a value)

function getLegalUsers(users) {
    let legalUsers = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18)
            legalUsers.push(users[i])
    }
    return legalUsers
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

let allowedUsers = getLegalUsers(users)
console.log(allowedUsers)
console.log(typeof allowedUsers)  // logs object, as an array is a specialised type of an object in JS
console.log(Array.isArray(allowedUsers))  // if array -> returns true...else false