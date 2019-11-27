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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  object1Values = [];
  object1Keys = [];
  object2Values = [];
  object2Keys = [];
  final = {};
  //here you are conveting objects into arrays
  for (val in object1){
    //console.log(val)
    object1Values.push(object1[val])

    object1Keys.push(val)
  }
  //console.log("Object 1 keys are",object1Keys)
  //console.log("object 1 values are",object1Values)

  for (val in object2){
    object2Values.push(object2[val]);
    object2Keys.push(val) 
    

  }
  //console.log("Object 2 keys are",object2Keys)
  //console.log("object 2 values are",object2Values)
  //here you compare the length
  if ((object1Values.length === object2Values.length) && (object1Keys.length === object2Keys.length)){
    //console.log("both the keys and values arrays for both objects are the same length")
    for (item in object1Keys){
      comparisonKey = object1Keys[item];
      //console.log(comparisonKey)
//here you start comparing keys and values --> edit to accomdate arrays  
      if (Array.isArray(object1[comparisonKey])){
        //console.log("This is an array")
        if(eqArrays(object1[comparisonKey],object2[comparisonKey])){
          //console.log("These arrays are equal")

        } else {
          //console.log("these arrays arent equal")
          return false;
        }
      } else {
        //console.log("This is not an array")

      if (object1[comparisonKey] === object2[comparisonKey]){
        //console.log("the keys and values for both objects match for the key", comparisonKey);
      } else {
        //console.log("they have the same length but theyre keys and values dont match")
        return false;
      }
    }
    }
  } else {
    //console.log("they are not the same length therefore not the same")
    return false
  }
  return true
};




  const ab = { a: "1", b: "2"};
  const ba = { b: "2", a: "1" };
  console.log(eqObjects(ab, ba)); // => true

 const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
 const cd2 = { c: "1", d: ["2", 3, 4] };
 console.log( eqObjects(cd, cd2)); // => false