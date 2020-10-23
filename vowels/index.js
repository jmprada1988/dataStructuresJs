// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  for (let l of str.toLowerCase()) {
    "aeiou".includes(l) && count++;
  }
  return count;
}

function regexpVowelCount(str) {
  const found = str.match(/[aeiou]/gi);
  return found ? found.length : 0;
}
module.exports = {
  regexpVowelCount,
  vowels,
};
