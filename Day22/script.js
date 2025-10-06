// let arr = [100, 30, 49, 53, 90];

// console.log(arr)
// console.log(arr.length)

// let arr1 = [100, 30, "Rohit", true];
// console.log(arr1)
// console.log(arr1[2])
// console.log(typeof arr1)

// arr1[0] = 23;
// // console.log(arr1)
// arr1.push(253)
// arr1.push("strike");
// // console.log(arr1)


// arr1.pop()
// arr1.unshift(999) // age se assign karta hai element
// arr1.shift() // age se remove karta hai element
// console.log(arr1)

// let myArr = [10, 20, 30, 40, 50];

// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i])
// }

// for (let num in myArr){
//     // console.log(num)
// }

// let yourArr = myArr;
// youArr.push(34) // change the original array 
// console.log(youArr) // address referance copy 
// console.log(myArr) //

// const yourArr = myArr;
// yourArr = [34, 564, 3453, 65]; // typeerror
// console.log(yourArr)
// console.log(myArr)

// const arr = [10, 29, 20, 403, 34];
// const arr1 = arr.slice(2, 4)
// arr.splice(2, 5) // modify the original array

// arr.splice(2, 4, "rohit", 20) // replace elements

// console.log(arr)

// const arr = [10, 29, 20, 403, 34];
// const arr2 = ["rohit", 11, true]

// // arr.push(arr2)
// const arr3 = arr.concat(arr2);
// const arr4 = [arr, arr2, arr3]

// arr3 = [...arr, ...arr2, ...arr4]
// console.log(arr3)

const names = ["alice", "bob", "charlie", "rohit", "mohit"];
// console.log(names.toString())
// console.log(names.join(","))
// console.log(names.lastIndexOf("bob"))
// console.log(names.includes("alice"))
// console.log(names.sort()) // change the orginal array
// console.log(names.reverse())

// const a = [10, 43, 12, 412, 41]
// a.sort((a, b) => a - b)
// console.log(a)
// -ve = a ayega
// +ve = b ayega  

const arr = [10, 20,50, [39, 43, 54], 90];
// console.log(arr.flat(Infinity))
// console.log(arr[3])

const a = [10 ,309, "rohit", 9.4, true]
a.name = "mohan"
console.log(a)