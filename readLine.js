var readline = require("readline");
// Invokes a function on line event and leaves process opened
const invokeWith = (fn) => {
  process.stdin.setEncoding("utf8");
  const rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
  });
  return rl.on("line", fn);
};
// process.stdin.setEncoding("utf8");
// var rl = readline.createInterface({
//   input: process.stdin,
//   terminal: false,
// });

// rl.on("line", readLine);

// invokes function with a line input and closes the process
const getFromInput = (fn) => {
  const readLineString = (line) => {
    if (line !== "\n") {
      fn(line.toString().split(" "));
    }
    process.exit();
  };
  invokeWith(readLineString);
};

// function readLine(line) {
//   if (line !== "\n") {
//     var a = parseInt(line.toString().split(" ")[0], 10);
//     var b = parseInt(line.toString().split(" ")[1], 10);
//     if (a > b) {
//       gcd(a, b);
//     } else {
//       gcd(b, a);
//     }
//     process.exit();
//   }
// }

// function gcd(num1, num2) {
//   var remainder = num1 % num2;
//   if (remainder === 0) {
//     console.log(num2);
//     return num2;
//   } else {
//     gcd(num2, remainder);
//   }
// }

//invokeWith(readLine);
module.exports = { invokeWith, getFromInput };
