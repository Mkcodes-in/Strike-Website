const str = "rohitnegi"
const str1 = "rohit"
const date = 23;
// console.log(str, str1)

// console.log(str.length)
// console.log(str[0])

// console.log(str)
// console.log(str.toUpperCase()) no changes in original string

// console.log(str.toLowerCase())

const str2 = `Hello Coder Army Code`
// console.log(str2.indexOf("Cod"))
// console.log(str2.lastIndexOf("Code"))

// console.log(str2.includes("e"))

// console.log(str2.slice(2, 7)) // last index number include nhi hoga slice mein

// console.log(str2.slice(-6))

// console.log(str2.substring(2, 6))

const a = "  Rohit  ";
const b = "Negi";
const c = a+" "+b;
// console.log(c)
// console.log(a.trim()) remove whitespaces

// console.log(str2.split(" ")) // very important

// ==========> Date <=================

const now = new Date();
// console.log(now.toString())
// console.log(now.toLocaleDateString())
// console.log(now.getDay())
// console.log(now.getDate())
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getSeconds())

const now1 = Date.now()
const mydate = now1;
console.log(mydate.toString())

const now3 = Date.now();
const dates = new Date(1759327359942)
console.log(dates)