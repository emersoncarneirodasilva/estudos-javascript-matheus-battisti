let div = document.querySelector("#tamanho");
console.log(div);

div.style.height = "2000px";

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    console.log("Utrapassou dos 1000px");
  }
});
