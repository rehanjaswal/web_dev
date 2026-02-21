function isLegal(user) {
    if (user.age >= 18) console.log(user.name + " is allowed to vote")
    else console.log(user.name + " is not allowed to vote")
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

console.log(users[0].address[0].place)

for (let i = 0; i < users.length; i++) {
    isLegal(users[i])
}
// users.forEach(isLegal)