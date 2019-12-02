const assert = require('chai').assert;
const countOnly = require('../countOnly');
describe("#countOnly", () => {
  it("return 1 when one name found in given array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Jason"];
    let expected = 1;
    assert.strictEqual(actual, expected);
  })
  it("returns undefined when no name was found in given array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Karima"];
    let expected = undefined;
    assert.strictEqual(actual, expected);
  })
  it("returns 2 when name found twice in given array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let actual = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })["Fang"];
    let expected = 2;
    assert.strictEqual(actual, expected);
  })
})