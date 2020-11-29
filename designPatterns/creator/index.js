const obj1 = {},
  obj2 = new Object(),
  obj3 = Object.create(null);

// Dot notation
obj1.age = 22;
console.log(obj1.age); // --> 22

//Square brackets syntax

obj2["name"] = "Lein";
console.log(obj2["name"]); // --> Lein

// adds custom properties

Object.defineProperty(obj3, "randomInt", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
});
console.log(obj3["randomInt"]); //Any int

const defineProp = (obj, key, value) => {
  const config = {};
  config.value = value;
  Object.defineProperty(obj, key, config);
};

const car = Object.create(null);

defineProp(car, "brand", "BMW");
defineProp(car, "model", "Z4");
defineProp(car, "getInfo", function () {
  return `${this.brand} --> ${this.model}`;
});
console.log(car.getInfo()); // BMW --> Z4
