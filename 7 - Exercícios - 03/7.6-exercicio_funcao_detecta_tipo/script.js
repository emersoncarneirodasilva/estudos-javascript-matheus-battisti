function detectType(arguments) {
  console.log(typeof arguments);
}

detectType(15);
detectType(true);
detectType(null);
detectType(undefined);
detectType({});
detectType([]);
detectType("Olá");
detectType(function () {});
detectType(() => {});
detectType(NaN);

function verificaTipo(argumento) {
  if (typeof argumento === "number") {
    console.log("Este argumento é um número");
  } else if (typeof argumento === "string") {
    console.log("Este argumento é uma string");
  } else if (typeof argumento === "boolean") {
    console.log("Este argumento é um booleano");
  }
}

verificaTipo(15);
verificaTipo(true);
verificaTipo("Olá");
