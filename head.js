const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🚨  🚨  🚨 🚨Assertion Failed: " + actual + " != " + expected);
  } else {
    console.log(`🎊  🎉  🎊  🎉Assertion Passed: ${actual} === ${expected}`);
  }
};
const head = function (list) {
  let first = list[0];
  return first;
}
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,5,6,7]), 5);
assertEqual(head(["Anisa","Hello", "Lighthouse", "Labs"]), "Hello");