let timeout;

window.addEventListener("mousemove", (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log("Posição no eixo 'x':", e.x);
    console.log("Posição no eixo 'y':", e.y);
  }, 1000);
});
