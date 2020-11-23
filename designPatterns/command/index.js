const caller = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (a === 0 || b === 0) return 0;
    return a / b;
  },
};

const handler = {
  perform: function (name, args) {
    if (name in caller) {
      return caller[name].apply(caller, [].slice.call(arguments, 1));
    }
  },
};

module.exports = { caller, handler };

console.log(handler.perform("divide", 20, 10));
