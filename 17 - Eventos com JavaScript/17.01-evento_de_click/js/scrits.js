let btn = document.querySelector("button");
console.log(btn);

btn.style.border = "1px solid gray";
btn.style.borderRadius = "7px";
btn.style.padding = "5px 8px";
btn.style.cursor = "pointer";

btn.addEventListener("click", () => {
  console.log("Foi clicado");
  btn.style.color = "white";
  btn.style.backgroundColor = "#1d1b1b";
});
