// create a constructor which can be decorated
function TeslaUnit({
  vehicleType,
  model,
  make,
  weigth,
  engine,
  price,
  speed,
  hp,
  range,
}) {
  this.vehicleType = vehicleType || "Sedan";
  this.model = model || "Plaid";
  this.make = make || "Tesla";
  this.weigth = weigth || "1200";
  this.engine = engine || "Dual";
  this.price = price || 129000;
  this.speed = speed || 200;
  this.hp = hp || 1020;
  this.range = range || 325;
}

function CustomSpecs(type) {
  this.type = function () {
    return type.vehicleType;
  };
  this.price = function () {
    return type.price;
  };

  this.engine = function () {
    return type.engine;
  };
  this.weigth = function () {
    return type.weigth;
  };

  this.model = function () {
    return type.model;
  };
  this.make = function () {
    return type.make;
  };
  this.speed = function () {
    type.speed;
  };
  this.hp = function () {
    return type.hp;
  };
  this.range = function () {
    return type.range;
  };
}
// example Vehicle Constructor

const hertzOrder = new TeslaUnit({
  vehicleType: "Sedan",
  model: "S",
  make: "Tesla",
  weigth: 1750,
  engine: "Dual",
  price: 94900,
  speed: 155,
  hp: 350,
  range: 302,
});
const sedans = new CustomSpecs(hertzOrder);
//Decorator Performance
function Performance(CustomSpecs) {
  const hp = CustomSpecs.hp();
  const speed = CustomSpecs.speed();
  const weigth = CustomSpecs.weigth();
  const engine = CustomSpecs.engine();
  const price = CustomSpecs.price();
  const range = CustomSpecs.range();

  CustomSpecs.price = function () {
    return price * 1.2;
  };
  CustomSpecs.engine = function () {
    return engine === "Dual" ? "Trio" : engine;
  };
  CustomSpecs.weigth = function () {
    return weigth * 1.25;
  };
  CustomSpecs.speed = function () {
    return speed * 1.25;
  };
  CustomSpecs.hp = function () {
    return hp * 1.5;
  };
  CustomSpecs.range = function () {
    return range * 1.225;
  };
}

// Decorator Long Range
function LongRange(CustomSpecs) {
  const weigth = CustomSpecs.weigth();
  const price = CustomSpecs.price();
  const range = CustomSpecs.range();
  CustomSpecs.price = function () {
    return price * 1.33;
  };
  CustomSpecs.weigth = function () {
    return weigth * 1.189;
  };
  CustomSpecs.range = function () {
    return range * 1.45;
  };
}
// Decorator Painting
function Painting(CustomSpecs) {
  const price = CustomSpecs.price();
  CustomSpecs.price = function () {
    return price + 1000;
  };
}

// Decorator Wheels
function Wheels(CustomSpecs) {
  const price = CustomSpecs.price();
  CustomSpecs.price = function () {
    return price + 1500;
  };
}
// Decorator Interior
function Interior(CustomSpecs) {
  const price = CustomSpecs.price();
  CustomSpecs.price = function () {
    return price + 1000;
  };
}
// Decorator SelfDriving
Performance(sedans);
Painting(sedans);
Wheels(sedans);
Interior(sedans);
// Long Range Decorator Should not go with Performance at Tesla
LongRange(sedans);
console.log(sedans.price()); // 156115.4

module.exports = {
  TeslaUnit,
  CustomSpecs,
  Performance,
  LongRange,
  Painting,
  Wheels,
  Interior,
};
