const { regexpVowelCount, vowels } = require("./index");

test("Vowels is a function", () => {
  expect(typeof vowels).toEqual("function");
});

test("returns the number of vowels used", () => {
  expect(vowels("aeiou")).toEqual(5);
});

test("returns the number of vowels used when they are capitalized", () => {
  expect(vowels("AEIOU")).toEqual(5);
});

test("returns the number of vowels used", () => {
  expect(vowels("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
});

test("returns the number of vowels used", () => {
  expect(vowels("bcdfghjkl")).toEqual(0);
});
test("regexpVowelCount is a function", () => {
  expect(typeof regexpVowelCount).toEqual("function");
});

test("returns the number of vowels used", () => {
  expect(regexpVowelCount("aeiou")).toEqual(5);
});

test("returns the number of vowels used when they are capitalized", () => {
  expect(regexpVowelCount("AEIOU")).toEqual(5);
});

test("returns the number of vowels used", () => {
  expect(regexpVowelCount("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
});

test("returns the number of vowels used", () => {
  expect(regexpVowelCount("bcdfghjkl")).toEqual(0);
});
