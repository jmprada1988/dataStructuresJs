const {
  TeslaUnit,
  CustomSpecs,
  Performance,
  LongRange,
  Painting,
  Wheels,
  Interior,
} = require("./index");

describe("Tesla Factory with Decorators", () => {
  const data = {
    vehicleType: "Sedan",
    model: "S",
    make: "Tesla",
    weigth: 1750,
    engine: "Dual",
    price: 94900,
    speed: 155,
    hp: 350,
    range: 302,
  };
  const testUnit = new TeslaUnit(data);
  it("has the required method constructors", () => {
    expect(testUnit).toBeDefined();
    expect(typeof testUnit).toEqual("object");
  });
  it("Creates a vehicle according to the constructor", () => {
    const testInstance = new TeslaUnit(data);
    expect(testInstance).toEqual(data);
  });
});
