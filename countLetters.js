const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log("🚨  🚨  🚨 🚨Assertion Failed: " + actual + " != " + expected);
  } else {
    console.log(`🎊  🎉  🎊  🎉Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = phrase => {
  sentance = phrase.split(" ");
  mergedSentance = ""
  lettersArray = {}
  for (words in sentance) {
    mergedSentance = mergedSentance + sentance[words];

  }
  //HERE I NEED TO MAKE MERGED SENTANCE LOWERCASE
  mergedSentance =  mergedSentance.toLowerCase()
  for (letter in mergedSentance) {
    //console.log(mergedSentance[letter])
    lettersArray[mergedSentance[letter]]= 0;
    //console.log(lettersArray)
  }
  for (letter in mergedSentance) {
   // console.log(mergedSentance[letter])
    lettersArray[mergedSentance[letter]] +=1;
    //console.log(lettersArray)
  }

  return lettersArray
}
console.log(countLetters("My name is Anisa"))
