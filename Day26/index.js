// scope and closure, HOF
// Global , functional and block level scope. 

let a = 20;
const b = 10;


if (true) {
    // console.log(b);
    var e = 23;
}

// console.log(e)

// function greet(){
//     let c = 2;
//     console.log(c)
// }

// greet();

// let global = 20;

// function greet(){
//     let global = 4;
//     console.log(global)
//     function meet(){
//         let global = 5;
//         console.log(global)
//     }
//     meet();
// }
// greet();


// function createCounter(){ // closure
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }
// const cout = createCounter();
// console.log(cout())
// console.log(cout())
// console.log(cout())

// let balance = 500;

// function createBankAccount() {

//     let balance = 500
//     let user = {
//         deposit: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount === "number" && amount > 0 && balance >= amount) {
//                 balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function () {
//             return balance;
//         }
//     }
//     return user;

// }

// const cust = createBankAccount();
// console.log(cust)


function double(value){
    return function execute(num){
        return num * value;
    }
}

const x = double(44)(2);
console.log(x)