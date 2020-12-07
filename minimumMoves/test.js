const  { minimumMoves} = require("./minimumMoves")

test("minimumMoves is defined", ()=> {
  expect(typeof minimumMoves).toEqual("function")
});

test("properly compute arrays with single records", () => {
  expect(minimumMoves([123], [321])).toEqual(4)
  expect(minimumMoves([1], [8])).toEqual(7)
})
test("properly compute arrays with multiple records", () => {
  expect(minimumMoves([123, 543], [321, 279])).toEqual(16);
  expect(minimumMoves([1], [8])).toEqual(7)
})