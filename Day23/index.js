// object

// const user = {
//     name: "rohit",
//     age: 20,
//     emailId: "negi@gmail.com", 
//     amount: 3499,
//     "home address": "dwarka",
// }

// console.log(typeof user)
// console.log(user.name)

// console.log(user["home address"])
// console.log(user["name"])

// update
// user.addhar = 2353;
// user.amount = 4000;
// console.log(user)

// // delete
// delete user.emailId;
// console.log(user)

// const user2 = user;
// user2.age = 90;
// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// for (let i in user){
//     console.log(i, user[i]) // key or value using loop
// }

// object destructure

// const {name, age, emailId} = user;
// console.log(name)

// array destructure
// const arr = [19, 29, 49];
// const [first, second, third] = arr;
// console.log(first)

// printing keys of object
// for(let keys of Object.entries(user)){
//     console.log(keys)
// }


//  printing value of object

// for(let values of Object.entries(user)){
//     console.log(values)
// }

// both 

// for (let [key, value] of Object.entries(user)){
//     console.log(key , value)
// }

// this keyword impotance
// const user = {
//     name: "rohit",
//     age: 20,
//     emailId: "negi@gmail.com", 
//     amount: 3499,
//     "home address": "dwarka",
//     greeting: function (){
//         console.log(`strike is coming soon 18 october ${this.name}`);
//         return 34;
//     },
//     address: {
//         city : "xyz" ,
//         state : "abc"
//     }
// }

// const user2 = {
//     name: "mohan",
//     age: 202,
//     amount: 34399,
//     "home address": "dwarka",
//     greeting: function (){
//         console.log(`strike is coming soon 18 october ${this.name}`);
//         return 34;
//     },
//     address: {
//         city: "dwarka", 
//         state: "new delhi"
//     }
// }

// user2.greeting = user.greeting;
// console.log(user2.greeting())
// console.log(user.greeting())

//  nested object accessing
// console.log(user2.address.city)

// shallow copy
// const user2 = {...user};
// user2.name = "dmeon zone"
// user2.address.city = "mno";
// // console.log(user2)
// // console.log(user)

// // deep copy
// const user2 = structuredClone(user);
// console.log(user2)

// const user ={
//     name: "rohit", 
//     age: 34, 
//     0: "xyz", 
//     1: "abc"
// }
// console.log(user[0])

// Symbols

const sym = Symbol("id");
const user ={
    name: "rohit", 
    age: 34, 
    0: "xyz", 
    1: "abc", 
    [sym]: "hello bhai"
}
console.log(user.sym)