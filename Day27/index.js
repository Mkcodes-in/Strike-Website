// forEach , filter , reducer, map, set

// const arr = [10, 20, 30, 40, 50];
// let sum = 0;

// arr.forEach((itm) => {
//     return sum += itm;
// })
// console.log(sum)

const arr = [10, 20, 30, 40];
// const newArr = arr.filter((itm) => itm > 29);
// console.log(newArr)

Array.prototype.filtering = function(cmp){
    const store = [];
    for(let num of this){
        if(cmp(num)){
            store.push(num);
        }
    }

    return store;
}

// const newArr = arr.filtering((num => num > 20))
// console.log(newArr)

// const a = [49, 30, 34, 31, 39];
// const myNewArr = a.filtering((num => num > 33));

// console.log(myNewArr)

// const h = arr.map((num) => num * 2);
// console.log(h)

const products = [
{ id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
{ id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
{ id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
{ id: 4, name: "Monitor", category: "Electoronics", price: 300, inStock: true },
{ id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true }]

// const myProduct = products.filter(product => product.price > 299).sort((a, b) => b.price - a.price);
// const myProduct = products.map(product => ({name: product.name, price: product.price, inStock: product.inStock}))
// console.log(myProduct)

// reduce

// const totalPirce = products.reduce((a, b) => {
//     if(b.inStock)
//     return a + b.price;
//     else
//     return a + b.price;
// }, 0);
// console.log(totalPirce)

// set 

// const s = new Set(arr);
// s.add(39);
// console.log(s.has(20))
// console.log(s)

const email = ["ro@gm", "ra@gm", "mo@gm", "ro@gm"];
// const mySet = new Set(email);
// const mySet = [...new Set(email)];
// console.log(mySet)
// console.log(email)

// for (let num of new Set(email)){
//     console.log(num)
// }

// map 

// const m1 = new Map([
//     ["Rohit", 49], 
//     [2, "Rohit"],
//     [true, 11], 
//     [[10, 30, 11], "Rohit"]
// ])
// // console.log(m1)

// m1.set({name: "Manish", age: 29}, false);
// // console.log(m1)

// for (let [key, value] of m1){
//     console.log(key, value)
// }


// myArr.map((itm) => {
    //     console.log(itm)
    // })
    
let myArr = [10, 20, 30, 40];

let cubeLogic = (arr) => {
    return arr * arr * arr;
}

Array.prototype.MyMap = function(array, callback){
    const result = [];
    for(i = 0; i < array.length; i++){
        result.push(callback(array[i]));
    }
    return result;
}

const response = myArr.MyMap(myArr, cubeLogic);
console.log(response)