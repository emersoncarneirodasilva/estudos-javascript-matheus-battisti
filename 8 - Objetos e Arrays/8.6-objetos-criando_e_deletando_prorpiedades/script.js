let car = {
  name: "Mustang",
  brand: "Ford",
  dors: 2,
  engine: "v8",
  isElectric: true,
};

console.log(car.name);
console.log(car.brand);
console.log(car.dors);
console.log(car.engine);
console.log("É elétrico?", car.isElectric);

delete car.isElectric;
console.log(car.isElectric);

car.tetoSolar = false;
console.log("Possui teto solar?", car.tetoSolar);

console.log(car);

console.log(
  `O ${car.brand} ${car.name} possui ${car.dors} portas e um motor ${car.engine}`
);
