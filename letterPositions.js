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
  console.log(arr1, arr2)
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are Equal!!! 🎊  🎉  🎊  🎉")
  } else {
    console.log("These arrays are Not Equal!!! 🚨  🚨  🚨 🚨")

  }
}


const letterPositions = function (sentence) {
  const results = {};
  lowerCaseSentence = sentence.toLowerCase()
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    if (!results[lowerCaseSentence[i]]) {
      results[lowerCaseSentence[i]] = [i];
    } else {
      results[lowerCaseSentence[i]].push(i);
    }
  }
  delete results[" "]
  return results;
};

//letterPositions("hello Mello")


//  assertArrayEqual(letterPositions("hello"),{ 
//   h: [0],
//   e: [1],
//   l: [2,3],
//   o: [4]
// })

//assertArraysEqual(letterPositions("hello")["h"], [0])

//assertArraysEqual(letterPositions("hello").e, [1]);
//assertArraysEqual(letterPositions("hello")["e"], [1])

// assertEqual(letterPositions("lighthouse in the house"),{ 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// })