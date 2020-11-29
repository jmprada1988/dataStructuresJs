const { init } = require("./index");

test("Init method exist", () => {
  expect(init).toBeDefined();
  expect(typeof init).toEqual("function");
});

test("Singleton creates instance with options", () => {
  const inst = init({ pointX: "abc", pointY: 321 });
  expect(inst.pointX).toEqual("abc");
  expect(inst.pointY).toEqual(321);
});
