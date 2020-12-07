function repeatedString(s, n) {
  const start = s.split("").filter((c) => c === "a").length,
    occurrences = parseInt(n / s.length),
    otherLetters = n % s.length,
    found = occurrences * start +
    s
      .slice(0, otherLetters)
      .split("")
      .filter((c) => c === "a").length;

  return found; 
}


console.log(repeatedString("asadesa", 10))