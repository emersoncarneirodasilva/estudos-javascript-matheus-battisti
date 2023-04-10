window.addEventListener("load", () => {
  alert("Clique em 'OK' para aceitar os termos de uso!");
});

// A mensagem aparecerá quando pressioado "F5"
window.addEventListener("beforeunload", (e) => {
  e.returnValue = null;
});
