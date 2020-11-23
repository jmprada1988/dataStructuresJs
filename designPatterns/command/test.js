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
test("Aritmetic operation work correctly", () => {
  expect(handler.perform("add", 2, 6)).toEqual(8);
  expect(handler.perform("subtract", 2, 6)).toEqual(-4);
  expect(handler.perform("multiply", 2, 6)).toEqual(12);
  expect(handler.perform("divide", 24, 6)).toEqual(4);
});

test("it handles mathematical edge cases", () => {
  expect(() => {
    handler.perform("add", 0, 0);
  }).not.toThrow();
  expect(() => {
    handler.perform("divide", 20, 0);
  }).not.toThrow();
  expect(() => {
    handler.perform("divide", 0, 20);
  }).not.toThrow();
});
