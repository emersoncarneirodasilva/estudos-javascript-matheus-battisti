let mainTitle = document.querySelector("#main-title");

console.log(`Altura ${mainTitle.offsetHeight}`); // Considera as bordas
console.log(`Largura ${mainTitle.offsetWidth}`); // Considera as bordas

console.log(`Altura ${mainTitle.clientHeight}`); // Não considera as bordas
console.log(`Largura ${mainTitle.clientWidth}`); // Não considera as bordas
