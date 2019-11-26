// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log("🚨  🚨  🚨 🚨Assertion Failed: " + actual + " != " + expected);

  } else {
    console.log(`🎊  🎉  🎊  🎉Assertion Passed: ${actual} === ${expected}`);

  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 11);


// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
    return true;
  }
};
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1,arr2)){
    console.log("These arrays are Equal!!! 🎊  🎉  🎊  🎉")
  } else {
    console.log("These arrays are Not Equal!!! 🚨  🚨  🚨 🚨")

  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 2, 1])