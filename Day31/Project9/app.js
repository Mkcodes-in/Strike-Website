const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const form = document.querySelector("form");
const unOrderlist = document.querySelector("ul");
const DelBtn = document.querySelector("#del");

const TodoArr = [];

function handleSubmit(e) {
    e.preventDefault();

    const value = input.value;
    const id = Date.now();
    const finalValue = { value, id };

    TodoArr.push(finalValue);
    input.value = ""

    const todoList = document.createElement("li");
    unOrderlist.append(todoList);
    TodoArr.forEach((item, idx) => {
        todoList.innerHTML = `
        <li><h2>${item.value}</h2><button id="del" >Delete</button></li>
        `
    })
    console.log(TodoArr)
}
form.addEventListener("submit", handleSubmit);
