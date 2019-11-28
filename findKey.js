const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log("🚨  🚨  🚨 🚨Assertion Failed: " + actual + " != " + expected);

  } else {
    console.log(`🎊  🎉  🎊  🎉Assertion Passed: ${actual} === ${expected}`);

  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = (obj, callback) => {
  let keyList = Object.keys(obj);
  for (name of keyList) {
    if (callback(obj[name])) {
      return name
      
    }
  }

}
// const findKey = (obj, callback) => { // alternative using in from janice
// for(let item in obj){
//   if(callback(obj[item])){
//     return item
//   }
// }}


// const findKeyByValue = (obj, val) => {
//   var answer;
//   for (key in obj){
//     if (obj[key]===val){
//      answer = key
//       console.log(key)
//       return answer
//     }
//   }
//   }
//   const bestTVShowsByGenre = { 
//     sci_fi: "The Expanse",
//     comedy: "Brooklyn Nine-Nine",
//     drama:  "The Wire"
//   };

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"