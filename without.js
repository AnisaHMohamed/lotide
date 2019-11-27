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
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are Equal!!! 🎊  🎉  🎊  🎉")
  } else {
    console.log("These arrays are Not Equal!!! 🚨  🚨  🚨 🚨")

  }
}
// assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual([1, 2, 3], [3, 2, 1])

// Implement without which will return a subset of a given array, removing unwanted elements.
// This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = (arr1, itemsToRemove) => {
  var finalArray = [];
  console.log(arr1, itemsToRemove)
  for (let index = 0; index < arr1.length; index++) {
    var isGood = true;
    for (let jindex = 0; jindex < itemsToRemove.length; jindex++) {
      
      if (arr1[index] === itemsToRemove[jindex]) {
        isGood = false;
      }


    }
    
    if(isGood){
      finalArray.push(arr1[index])
    }

  }
  return finalArray
}
//const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);