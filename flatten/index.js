// const  flatten = arr =>  {
//   let i = 0
//     while (i < arr.length) {
//         Array.isArray(arr[i]) && arr.splice(i, 1, ...arr[i])  || i++
//     }
//     return arr
// }


const  flatten = arr =>  arr.reduce((acc, arr) => acc.concat(Array.isArray(arr) ? flatten(arr) : arr), [])

flatten([1,2,3,4,5[3,4,5]])

module.exports = flatten

