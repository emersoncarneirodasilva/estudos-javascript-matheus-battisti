let btn = document.querySelector("button");
console.log(btn);

btn.style.cursor = "pointer";

btn.addEventListener("mousedown", () => {
  btn.style.color = "#7feb37";
  btn.style.backgroundColor = "black";
});

btn.addEventListener("mouseup", () => {
  btn.style.color = "#3a37eb";
  btn.style.backgroundColor = "black";
});

btn.addEventListener("mouseenter", () => {
  btn.style.color = "#efefef";
  btn.style.backgroundColor = "black";
});

btn.addEventListener("mouseleave", () => {
  btn.style.color = "black";
  btn.style.backgroundColor = "#efefef";
});

btn.addEventListener("dblclick", () => {
  btn.style.color = "#f22f2f";
  btn.style.backgroundColor = "black";
});

// Pegando o botão direito do mouse
btn.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  btn.style.color = "#201a1a";
  btn.style.backgroundColor = "#18ddac";
});
