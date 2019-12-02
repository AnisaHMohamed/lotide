// FUNCTION IMPLEMENTATION
const eqArrays = (arr1, arr2) => {
  if( arr1 ===undefined ||arr2 ===undefined){
    return false;
  }
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
module.exports = eqArrays