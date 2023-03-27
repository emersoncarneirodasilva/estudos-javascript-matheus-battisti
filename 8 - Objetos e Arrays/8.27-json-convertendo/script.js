let cars = {
  brand: "Ford",
  wheels: 4,
  doors: 2,
  type: "SUV",
};

let jsonToString = JSON.stringify(cars);
console.log("Covertendo JSON para String:", jsonToString);

let stringToJSON = JSON.parse(jsonToString);
console.log("Convertendo String para JSON:", stringToJSON);

console.log(stringToJSON.brand);
console.log(stringToJSON.wheels);
console.log(stringToJSON.doors);
console.log(stringToJSON.type);
