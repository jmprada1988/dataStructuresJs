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

  it("Allows Unit Performance enhancements", () => {
    const customization = new CustomSpecs(testUnit);

    Performance(customization);
    console.log(customization.hp());
    expect(customization.price()).not.toEqual(data.price);
    expect(customization.hp()).toEqual(525);
  });

  it("Allows Range Customization", () => {
    const customization = new CustomSpecs(testUnit);

    LongRange(customization);
    expect(customization.price()).not.toEqual(data.price);
    expect(customization.hp()).toEqual(data.hp);
    expect(customization.range()).toBeGreaterThan(data.range);
  });

  it("Allows custom painting", () => {
    const customization = new CustomSpecs(testUnit);

    Painting(customization);
    expect(customization.price()).not.toEqual(data.price);
    expect(customization.price()).toEqual(data.price + 1000);
    expect(customization.range()).not.toBeGreaterThan(data.range);
  });

  it("Allows wheel change", () => {
    const customization = new CustomSpecs(testUnit);

    Wheels(customization);
    expect(customization.price()).not.toEqual(data.price);
    expect(customization.price()).toEqual(data.price + 1500);
    expect(customization.range()).not.toBeGreaterThan(data.range);
  });

  it("Allows white interiors", () => {
    const customization = new CustomSpecs(testUnit);

    Interior(customization);
    expect(customization.price()).not.toEqual(data.price);
    expect(customization.price()).toEqual(data.price + 1000);
    expect(customization.range()).not.toBeGreaterThan(data.range);
  });
});
