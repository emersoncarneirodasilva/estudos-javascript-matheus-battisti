let newElement = document.createElement("p");
newElement.innerText = "Paragráfo construído por replace child";
let targetElement = document.querySelector("#main-title");
let fatherElement = targetElement.parentNode;

fatherElement.replaceChild(newElement, targetElement);
