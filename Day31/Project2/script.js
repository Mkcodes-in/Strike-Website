const btns = document.querySelectorAll("button");
const body = document.querySelector("body");

console.log(body)
btns.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        body.style.backgroundColor = `${buttons.textContent}`
    })
})