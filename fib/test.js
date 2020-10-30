const { recursiveFib, iterativeFib } = require("./index");

test("recursiveFib function is defined", () => {
  expect(typeof recursiveFib).toEqual("function");
});

test("calculates correct recursiveFib value for 1", () => {
  expect(recursiveFib(1)).toEqual(1);
});

test("calculates correct recursiveFib value for 2", () => {
  expect(recursiveFib(2)).toEqual(1);
});

test("calculates correct recursiveFib value for 3", () => {
  expect(recursiveFib(3)).toEqual(2);
});

test("calculates correct recursiveFib value for 4", () => {
  expect(recursiveFib(4)).toEqual(3);
});

test("calculates correct recursiveFib value for 15", () => {
  expect(recursiveFib(39)).toEqual(63245986);
});
test("iterativeFib function is defined", () => {
  expect(typeof iterativeFib).toEqual("function");
});

test("calculates correct iterativeFib value for 1", () => {
  expect(iterativeFib(1)).toEqual(1);
});

test("calculates correct iterativeFib value for 2", () => {
  expect(iterativeFib(2)).toEqual(1);
});

test("calculates correct iterativeFib value for 3", () => {
  expect(iterativeFib(3)).toEqual(2);
});

test("calculates correct iterativeFib value for 4", () => {
  expect(iterativeFib(4)).toEqual(3);
});

test("calculates correct iterativeFib value for 15", () => {
  expect(iterativeFib(39)).toEqual(63245986);
});
