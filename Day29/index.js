// const newElm = document.createElement("h2");
// newElm.textContent = "Strike is coming";
// newElm.id = "second";

// // select element first
// const h1 = document.querySelector("h1");
// // h1.before(newElm);
// h1.after(newElm);

// const newElm2 = document.createElement('h3');
// newElm2.textContent = "Happy Diwali Happy Diwali";
// newElm2.id = "third";
// newElm2.className = "diwali";
// newElm2.classList = "holi"

// // newElm2.classList.remove('holi')

// h1.after(newElm2);
// newElm2.style.backgroundColor = "brown";
// newElm2.style.fontSize = "40px"

// newElm2.setAttribute("hello", "ji");

// console.log(newElm2.getAttribute("hello"))

// const listing = document.getElementById("listing");
// const list = document.createElement("li");
// const list2 = document.createElement("li");
// const list3 = document.createElement("li");
// const list4 = document.createElement("li");

// list.textContent = "Milk";
// list2.textContent = "cake";
// list3.textContent = "Halwa";
// list4.textContent = "Paneer";

// listing.append(list, list2);
// listing.prepend(list3);


const arr = ["Milk", "Halwa", "paneer", "tofu", "tea"];
const listing = document.getElementById("listing");
const fragment = document.createDocumentFragment(); // use this method

for(items of arr){
    const list = document.createElement("li");
    list.textContent = items;
    fragment.append(list)
}
listing.append(fragment)

const months = document.getElementById("months");

const lister = document.createElement("li");
lister.textContent = "Help"

// months.insertAdjacentElement("afterend", lister) // old method
// console.log(months.children)

// textContext vs innerHTML
// innerHTML dangerous ❌

months.prepend(lister)