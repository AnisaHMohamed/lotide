const assert = require('chai').assert;
const head = require('../head');
describe("#head", () => {
  it("returns first value of array of numbers", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });
  it("returns returns value of item in array of length", () => {
    assert.deepEqual(head(['5']), '5'); 
  });
  it("returns first value of array of strings", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("return undefined for empty array", () => {
    assert.deepEqual(head([]), undefined);
  });
});