const { caller, handler } = require("./index");

test("Caller exist", () => {
  expect(caller).toBeDefined();
  expect(typeof caller).toEqual("object");
});
test("Caller has mathematical methods", () => {
  expect(caller.add).toBeDefined();
  expect(typeof caller.add).toEqual("function");
  expect(caller.subtract).toBeDefined();
  expect(typeof caller.subtract).toEqual("function");

  expect(caller.multiply).toBeDefined();
  expect(typeof caller.multiply).toEqual("function");

  expect(caller.divide).toBeDefined();
  expect(typeof caller.divide).toEqual("function");
});

test("Handler exist", () => {
  expect(handler).toBeDefined();
  expect(typeof handler).toEqual("object");
});
