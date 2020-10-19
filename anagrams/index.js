// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if(cleanString(stringA) !== cleanString(stringB)) {
    return false
  }
  
  return true;
}
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}
// function anagrams(stringA, stringB) {
//   const a = createMap(stringA), b = createMap(stringB);

//   if(Object.keys(a).length !== Object.keys(b).length) {
//     return false;
//   }
//   for(let ch in a) {
//     if(a[ch] !== b[ch]) {
//       return false
//     }
//   }
//   return true
// }

// function createMap(str) {
//   const charMap = {}

//   for(const ch of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[ch] = charMap[ch] + 1 | 1
//   }
//   return charMap
// }
anagrams("hello", "llohe")
module.exports = anagrams;
