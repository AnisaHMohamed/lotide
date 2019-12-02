const assert = require('chai').assert;
const flatten = require('../flatten');
describe("#flatten", () => {
  it("returns empty array when given and empty array", () => {
   const actual =  flatten([]);
   const expected = [];
    assert.deepEqual(actual,expected);
  });
  //no nested arrays
  it("returns original array when there are no nested arrays", () => {
    const actual =  flatten([1,2,3,4,5]);
    const expected = [1,2,3,4,5];
     assert.deepEqual(actual,expected);
   });
//nested array within array
it("returns flattened array when there are nested arrays", () => {
  const actual =  flatten([1, 2, [3, 4], 5, [6]]);
  const expected = [1,2,3,4,5,6];
   assert.deepEqual(actual,expected);
 });
 it("returns flattened array all elements are nested arrays", () => {
  const actual =  flatten([[1], [2], [3, 4], [5, 6]]);
  const expected = [1,2,3,4,5,6];
   assert.deepEqual(actual,expected);
 });
});




//console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
