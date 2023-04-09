let newElement = document.createElement("p");
let targetElement = document.querySelector("#main-title");
let fatherElement = document.querySelector("#main-container");

let newP = fatherElement.insertBefore(newElement, targetElement);
newP.innerText = "Parágrafo criado no DOM";
