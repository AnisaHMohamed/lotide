const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log("🚨  🚨  🚨 🚨Assertion Failed: " + actual + " != " + expected);

  } else {
    console.log(`🎊  🎉  🎊  🎉Assertion Passed: ${actual} === ${expected}`);

  }
};
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
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1,arr2)){
    console.log("These arrays are Equal!!! 🎊  🎉  🎊  🎉")
  } else {
    console.log("These arrays are Not Equal!!! 🚨  🚨  🚨 🚨")

  }
}
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));

  }

  return results;
}



const results1 = map(words, word => word[0]);
console.log(results1);
const randomNumbers = [1,99,102,32,8888,21,13,55,22];
assertArraysEqual(map([1,99,102,32,8888,21,13,55,22], num=> num/2),[0.5,49.5,51,16,4444,10.5,6.5,27.5,11])