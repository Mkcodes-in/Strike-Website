const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const form = document.querySelector("form");
const unOrderlist = document.querySelector("ul");
const DelBtn = document.querySelector("#del");
const DoneBtn = document.querySelector("#done");

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
    TodoArr.forEach((item) => {
        todoList.innerHTML = `
        <li style="display: flex; justify-content: space-between; gap: 30px; align-items: center;"><h2>${item.value}</h2><div style="display: flex; margin-top: 20px; gap: 10px; align-items: center;"><button id="done" >Done</button><button id="del" >Delete</button></div></li>
        `
    })
    console.log(TodoArr)
}
form.addEventListener("submit", handleSubmit);
