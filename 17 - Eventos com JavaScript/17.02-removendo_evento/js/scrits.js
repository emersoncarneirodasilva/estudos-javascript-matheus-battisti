let btn1 = document.querySelector("#btn1");
console.log(btn1);

let btn2 = document.querySelector("#btn2");
console.log(btn2);

btn1.style.border = "1px solid gray";
btn1.style.borderRadius = "7px";
btn1.style.padding = "5px 8px";
btn1.style.cursor = "pointer";

btn2.style.border = "1px solid gray";
btn2.style.borderRadius = "7px";
btn2.style.padding = "5px 8px";
btn2.style.cursor = "pointer";

function handleChangeColor() {
  console.log("Botão 'Clique Aqui' foi clicado");
  btn1.style.color = "white";
  btn1.style.backgroundColor = "#1d1b1b";
}

btn1.addEventListener("click", handleChangeColor);

btn2.addEventListener("click", () => {
  console.log("Botão 'Removendo' foi clicado");
  btn1.removeEventListener("click", handleChangeColor);
  btn1.style.color = "#62e018";
  btn1.style.backgroundColor = "#1d1b1b";
  btn2.style.color = "#1890e0";
  btn2.style.backgroundColor = "#1d1b1b";
});
