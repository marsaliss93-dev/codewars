// ??????????
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((sum, num) => sum + num, 0) +
         arr2.reduce((sum, num) => sum + num, 0);
}

console.log(arrayPlusArray([34, 15, 88, 2], [1, 2, 3])); // 145
console.log(arrayPlusArray([34, -345, -1, 100], [10, 20])); // -182

// Tests
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => { 
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//     assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//     assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//     assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
//   })
// })