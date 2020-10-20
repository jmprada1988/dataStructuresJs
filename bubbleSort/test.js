const { bubbleSortES6, naiveBubbleSort, optimizedBubbleSort } = require('./bubble')
const data = [89,1,2,3,48,5,6,7,10,45,56,67,87]
test("function bubbleSortES6 is defined", () => {
  expect(typeof bubbleSortES6).toEqual('function')
})

test("it sorts properly using bubbleSortES6", ()=> {
  expect(naiveBubbleSort(data)).toEqual([ 1, 2, 3, 5, 6, 7, 10, 45, 48, 56, 67, 87, 89 ])
})

test("function optimizedBubbleSort is defined", () => {
  expect(typeof optimizedBubbleSort).toEqual('function')
})

test("it sorts properly using optimizedBubbleSort", ()=> {
  expect(optimizedBubbleSort(data)).toEqual([ 1, 2, 3, 5, 6, 7, 10, 45, 48, 56, 67, 87, 89 ])
})

test("function naiveBubbleSort is defined", () => {
  expect(typeof naiveBubbleSort).toEqual('function')
})

test("it sorts properly using the naiveBubbleSort", () => {
  expect(naiveBubbleSort(data)).toEqual([ 1, 2, 3, 5, 6, 7, 10, 45, 48, 56, 67, 87, 89 ])
})