window.addEventListener("keydown", (e) => {
  if (e.key == "e") {
    console.log("A tecla 'E' foi pressionada!");
  } else if (e.key == "Enter") {
    console.log("A tecla 'Enter' foi pressionada!");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "e") {
    console.log("A tecla 'E' foi solta!");
  } else if (e.key == "Enter") {
    console.log("A tecla 'Enter' foi solta!");
  }
});
