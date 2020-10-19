// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("")
// }


// function reverse(str) {
//   let reversed = ""
//   for (const l of str) {
//     reversed = l + reversed
//   }
//   return reversed
// }
function reverse(str) {
  return str.split("").reduce((rev, ch)=> ch + rev, '')
}


module.exports = reverse;
