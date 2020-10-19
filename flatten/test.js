const flatten = require('./index')

test("Flatten tobe defined", () => {
  expect(flatten).toBeDefined()
})

test("flatten to be a function", () => {
  expect(typeof flatten).toEqual("function")
})

test("it returns the same one dimentional array", () => {
  const data = [1,2,3,4,5]
  const flat = flatten(data)
  expect(flat).toEqual([1,2,3,4,5])
})

test("it flattens nested arrays", () => {
  const data = [[1,2, [3,4,[5,6]], [7]],[8,9]]
  const flat = flatten(data)
  expect(flat).toEqual([1,2,3,4,5,6,7,8,9])
})
test("it flattens 2d arrays", () => {
  const data = [[2,3,4],[5,6,7]]
  const flat = flatten(data)
  expect(flat).toEqual([2,3,4,5,6,7])
})