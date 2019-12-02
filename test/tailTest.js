

const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  it("array should return tail", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result,["Lighthouse", "Labs"])

  });



it("1 element in array returns empty array", () => {
  const result = tail(["Hello"]);
  assert.deepEqual(result, []);
});

  



  it("empty array returns empty array", () => {
    let actual = tail([]);
    let expected = [];
    assert.deepEqual(actual, expected);

  });

  //check if orginal is modified
  it("original array is not modified", () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    
    tail(result);
    actual = result
    let expected =["Hello", "Lighthouse", "Labs"];
    
    assert.deepEqual(actual, expected);

  });
});

