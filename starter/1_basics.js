// Basic Node script

console.log("STARTED");
console.log(concatPrefixed(2, "apples"));

//
// Nested functions
//

function concatPrefixed(arg1, arg2) {
  const prefix = "ARGVAL:";

  // Nested functions
  function prefixed(value) {
    function identity(value) {
      return value;
    }
    return identity(prefix) + identity(value);
  }

  // String template literals
  // Use backticks (``) and use ${val} to interpolate values.
  return `${prefixed(arg1)} ${prefixed(arg2)}`;
}

//
// Arrow functions
//

// Simple one liner
const sum = (a, b) => a + b;
// Equivalent to:
// function sum(a, b) {
//   return a + b;
// }

// More complicated example
const addOrSubtract = (op, a, b) => {
  switch (op) {
    case "+":
      return sum(a, b);
    default:
      // Nested arrow function
      const subtract = (a, b) => a - b;
      return subtract(a, b);
  }
};
console.log(addOrSubtract("-", 123, 234));

//
// Trivia
//

// Callers can provide as many arguments as they want, and functions can read
// as many as they want. Here, we use string interpolation when passing args to
// console.log, as c will be undefined if it is not passed in.
const threeArgs = (a, b, c) => console.log(`${a} ${b} ${c}`);
console.log("Calling threeArgs with 2 args");
threeArgs(1, 2);
console.log("Calling threeArgs with 4 args");
threeArgs(1, 2, 3, 4);
