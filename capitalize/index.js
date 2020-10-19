// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const stringSplit = str.toLowerCase().split(" ")
//   for(let i = 0; i < stringSplit.length; i++) {
//     stringSplit[i] = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].substring(1)
//   }

//   return stringSplit.join(" ")
// }



// function capitalize(str) {
//   let words = []
//   for(let word of str.split(" ")) {
//     words = [...words, ...[word[0].toUpperCase() + word.slice(1)]]
//   }
//   return words.join(" ")
// }


function capitalize(str) {
  let result = str[0].toUpperCase()
  for(let i = 1; i < str.length; i++) {
    if(str[i -1] === " ") {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}

capitalize("hello there you")
module.exports = capitalize;
