let newElement = document.createElement("p");
let targetElement = document.querySelector("#main-p");
let fatherElement = targetElement.parentNode;

let newP = fatherElement.appendChild(newElement);
newP.innerText = "Paragráfo construído por append child";
