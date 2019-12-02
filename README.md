# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anisamohamed/lotide`

**Require it:**

`const _ = require('@anisamohamed/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  head
   -- An array with only one element should still yield that one element as its head
An empty array should yield undefined as its head
  
 

  tail 
  --- An array with only one element should yield an empty array for its tail
An empty array should yield an empty array for its tail,
  middle
  --- Implement middle which will take in an array and return the middle-most element(s) of the given array.

,
  
  assertArraysEqual
  ---Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.,

  assertEqual 
  --- If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in),

  assertObjectsEqual,
  countLetters
  ---The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
,
  countOnly
  ---This function should take in a collection of items and return counts for a specific subset of those items.,

  eqArrays 
  ---Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.,

  eqObjects,
  findKey,
  findKeyByValue 
  ---takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.,
  flatten
  ---Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.,
  head,
  letterPositions
  --- function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.,
  map,
  takeUntil,
  without 
  ----Implement without which will return a subset of a given array, removing unwanted elements.


