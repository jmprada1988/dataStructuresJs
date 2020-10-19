// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const countObj = {}
  let max = 0,
    maxChar = ""
  for (const ch of str) {
   countObj[ch] = countObj[ch] + 1 || 1
  }

  for(const char in countObj) {
    if(countObj[char] > max) {
      max = countObj[char]
      maxChar = char
    }
  }
  return maxChar
}

maxChar("mississippi")
module.exports = maxChar;
