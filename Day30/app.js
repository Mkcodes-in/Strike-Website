// h1Elm.addEventListner()
// const Elemet = document.querySelector("#first");

// function handleClick(){
//     Elemet.textContent = "strike is coming soon..."
// }

// function handleClick(){
//     Elemet.textContent = "hello ji"
// }

// Elemet.addEventListener("click", () => {
//     Elemet.textContent = "strike coming"
// })
// Elemet.addEventListener("mouseleave", () => {
//     Elemet.style.backgroundColor = "pink"
// })

// let a = {
//     b: 20, 
//     greet: (value) => {
//         console.log("Hello", value);
//     }
// }
// a.b = 40;
// a.b = 50;
// console.log(a)


// const parent = document.getElementById("parent");

// for(child of parent.children){
//     child.addEventListener("click", () => {
//         child.textContent = "i am click";
//     })
// }

// const grand = document.getElementById("grandparent");
// grand.addEventListener("click", (e) => {
//     // console.log("grand parent pe click");
//     console.log(e)
// })

// // const parent = document.getElementById("parent");
// parent.addEventListener("click", (e) => {
//     // console.log("parent parent pe click");
//     console.log(e)
// })

// const child = document.getElementById("child");
// child.addEventListener("click", (e) => {
//     // console.log("child parent pe click");
//     console.log(e)
// }, true)

const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
    console.log(e.target.textContent = "click")
})