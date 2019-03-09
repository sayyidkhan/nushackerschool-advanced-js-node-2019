// Functional functions in JavaScript: map, reduce, filter, and obj/array
// destructuring and rest/spread operator.
// map, reduce and filter work as you may expect, and you should have seen
// these in CS1010X/S or CS1101S.

const nums = [3, 1, 4, 1, 5, 9];

// map
const multTwo = v => v * 2;
const twiceNums = nums.map(multTwo);
console.log("twiceNums", twiceNums);
const thriceNums = nums.map(a => a * 3);
console.log("thriceNums", thriceNums);

// reduce
const sum = nums.reduce((accumulator, value) => accumulator + value);
console.log("sum", sum);
// Equivalent to:
// let accumulator = 0;
// for (value of nums) {
//   accumulator += value;
// }
// const sum = accumulator

// filter
const evens = nums.filter(v => v % 2 == 0);
console.log("evens", evens);

// Chainable
const oddSum = nums
  .filter(v => v % 2 == 1)
  .reduce((accumulator, value) => accumulator + value);
console.log("oddSum", oddSum);

//
// Destructuring
//

// Object destructuring
const obj = {
  pi: 3.14159,
  tau: 6.28318,
  multTwo, // Shorthand for `multTwo: multTwo`
  nums
};

const { pi, multTwo: anotherMultTwo } = obj;
// Equivalent to:
// const pi = obj.pi;
// const anotherMultTwo = obj.multTwo;
console.log("pi", pi, "anotherMultTwo", anotherMultTwo);

// Array destructuring
const [nums0, nums1] = nums;
console.log("nums0", nums0, "nums1", nums1);

//
// Spread/rest operators
//

// Array rest operator
const [num0, num1, ...otherNums] = nums;
console.log("num0", num0, "num1", num1, "otherNums", otherNums);

// Array spread operator
// Puts the values of other into the resulting array.
const borkedPiDigits = [num0, ...otherNums, num1];
console.log("borkedPiDigits", borkedPiDigits);

// Object rest operator
const { tau, ...otherVals } = obj;
console.log("otherVals", otherVals);

// Object spread operator
const obj2 = {
  num0, // New key/value pair will be added
  pi: 1231, // Will be overriden by otherVals.pi
  ...otherVals,
  nums: "how about no" // otherVals.nums will be overriden by this
};
console.log("obj2", obj2);
