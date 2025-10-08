// function greeting(){
//     console.log("Hello coder army, strike is coming soon on 18 october");
// }

// function addNum(a, b, c = 0){
//     const sum = a + b + c;
//     console.log(sum);
// }

// greeting()
// addNum(3, 5)
// addNum(3, 5, 3)

// rest operator
// function addNum(...num){
//     let sum = 0;
    
//     for(i of num){
//         sum += i;
//     }
//     console.log(sum)
// }

// addNum(2, 4)

// spread operator 
// const arr = [23, 234, 64, 34];
// const arr2 = [34, 59, 59, 23];
// const myArr = [...arr, ...arr2];
// console.log(myArr)

// rest operator

// function addNum(...num){ // rest the operator 
//     const sum = 0 ;
//     for(i of num){
//         sum += i;
//     }
//     console.log(sum)
// }
// addNum(2,3,5,3)


// create function 2 types

// function greeting(){
//     console.log("Hello coder army, strike is coming soon on 18 october");
// }

// const addNumber = function(a, b){
//     console.log(a + b);
// }
// addNumber(1, 4); // don't use without declaring function.

// Arrow function

// const addToNum = (a, b) => {
//     return a + b;
// }
// addToNum(3, 5);

// const addNum = (a, b) => a + b;

// const obj = () => ({name: "rohit", age: 19});
// console.log(obj())

// IIFE

// (function greeting(){
//     console.log("Helloji")
// })();

// callback function

function greet(){
    console.log("hello ji, kaise ho");
}

function meet(callback){
    console.log("meeting done");
    callback();
    // greet()// hardcode 
}

function dance(){
    console.log("i am dancing");
}

// meet(greet)
// meet(dance)
function zomatoOrder(){
    console.log("we have to started preparing your order");
}

function blinkit(){
    console.log("we are currently preparing your food");
}
function payment(amt, callback){
    console.log(`${amt} payment has initilized`);
    console.log("Payment is received");
    // zomatoOrder(); // hardcore 
    callback();
}
payment(300, zomatoOrder);
payment(200, blinkit)