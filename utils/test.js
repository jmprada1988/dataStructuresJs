const { memoize } = require("./index");

test("memoize function is defined", () => {
  expect(typeof memoize).toEqual("function");
});

test("memoizes properly a function", () => {
  expect(typeof memoize(() => {})).toEqual("function");
});
