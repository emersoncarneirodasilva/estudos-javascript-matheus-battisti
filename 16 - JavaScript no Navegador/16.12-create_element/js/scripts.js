let list = document.createElement("ul");

for (let i = 1; i <= 10; i++) {
  let items = document.createElement("li");
  let text = document.createTextNode(`Texto da lista ${i}`);

  items.appendChild(text);
  list.appendChild(items);
}

let container = document.querySelector("#main-container");
container.appendChild(list);
