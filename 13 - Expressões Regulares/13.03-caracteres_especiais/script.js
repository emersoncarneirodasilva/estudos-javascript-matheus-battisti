const pontoRegex = /./;

console.log(pontoRegex.test("Alguns caracteres"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("1536"));
console.log(pontoRegex.test("6234rwer"));

// Aceita qualquer número = /[0-9]/
const dRegex = /\d/;

console.log(dRegex.test("31234"));
console.log(dRegex.test("fweFfwee1"));
console.log(dRegex.test("ABASCVDacsdfasdf"));
console.log(dRegex.test(" "));

// Não aceita caracteres que possuam só números = /[^0-9]/
const dRegex2 = /\D/;

console.log(dRegex2.test("31234"));
console.log(dRegex2.test("fweFfwee1"));
console.log(dRegex2.test("ABASCVDacsdfasdf"));
console.log(dRegex2.test(" "));

// Aceita caracteres com espaços
const sRegex = /\s/;

console.log(sRegex.test("31234"));
console.log(sRegex.test("fweFfwee1"));
console.log(sRegex.test("ABASCVDacsdfasdf"));
console.log(sRegex.test(" "));
console.log(sRegex.test("Olá, como vai?"));

// Aceita caracteres sem espaços
const sRegex2 = /\S/;

console.log(sRegex2.test("31234"));
console.log(sRegex2.test("fweFfwee1"));
console.log(sRegex2.test("ABASCVDacsdfasdf"));
console.log(sRegex2.test(" "));
console.log(sRegex2.test("Olá, como vai?"));

// Aceita somente caracteres alfanuméricos
const wRegex = /\w/;

console.log(wRegex.test("31234"));
console.log(wRegex.test("fweFfwee1"));
console.log(wRegex.test("ABASCVDacsdfasdf"));
console.log(wRegex.test(" "));
console.log(wRegex.test("Olá, como vai?"));

// Aceita somente caracteres não-alfanuméricos
const wRegex2 = /\W/;

console.log(wRegex2.test("31234"));
console.log(wRegex2.test("fweFfwee1"));
console.log(wRegex2.test("ABASCVDacsdfasdf"));
console.log(wRegex2.test(" "));
console.log(wRegex2.test("Olá, como vai?"));
