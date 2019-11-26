const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🚨  🚨  🚨 🚨Assertion Failed: " + actual + " != " + expected);
  } else {
    console.log(`🎊  🎉  🎊  🎉Assertion Passed: ${actual} === ${expected}`);
  }
};
const tail = function(list) {
  let last = [...list];
  if (last.length <= 1) {
    return [];
  } 
  last.shift();

  return last;
};
//  Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: ...
// // length is 1 
const words = tail(["hello"]);
assertEqual(words.length, 0);


// // Test Case 3: ...
// // length is 0 
const word = tail([]);
assertEqual(word.length, 0);
