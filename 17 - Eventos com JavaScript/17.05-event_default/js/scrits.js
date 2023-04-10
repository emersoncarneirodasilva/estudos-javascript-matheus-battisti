let body = document.querySelector("body");
console.log(body);

let btn1 = document.querySelector("#btn1");
console.log(btn1);

let btn2 = document.querySelector("#btn2");
console.log(btn2);

let p = document.querySelector("p");
console.log(p);

let a = document.querySelector("a");
console.log(a);

// Parte do CSS
body.style.display = "flex";
body.style.flexDirection = "column";

btn1.style.border = "1px solid gray";
btn1.style.borderRadius = "7px";
btn1.style.padding = "5px 8px";
btn1.style.cursor = "pointer";

btn2.style.border = "1px solid gray";
btn2.style.borderRadius = "7px";
btn2.style.padding = "5px 8px";
btn2.style.cursor = "pointer";
btn2.style.width = "fit-content";

a.style.marginTop = "12px";

// Parte da funcionalidade
function handleChangeColor(e) {
  console.log("Botão 'Click Aqui' foi clicado");
  e.stopPropagation();
  btn1.style.color = "white";
  btn1.style.backgroundColor = "#1d1b1b";
  p.style.backgroundColor = "white";
}

btn1.addEventListener("click", handleChangeColor);

btn2.addEventListener("click", () => {
  console.log("Botão 'Removendo' foi clicado");
  btn1.removeEventListener("click", handleChangeColor);
  btn1.style.color = "#62e018";
  btn1.style.backgroundColor = "#1d1b1b";
  btn2.style.color = "#1890e0";
  btn2.style.backgroundColor = "#1d1b1b";
  a.style.color = "blue";
});

p.addEventListener("click", () => {
  console.log("O parágrafo foi clicado");
  p.style.backgroundColor = "#a81ca8";
  btn1.style.color = "#1d1b1b";
  btn1.style.backgroundColor = "#e7e5e5ff";
});

a.addEventListener("click", (e) => {
  e.preventDefault();
  a.style.color = "#fd8b08ff";
  a.innerText = "O prevent default foi ativado!";
});
