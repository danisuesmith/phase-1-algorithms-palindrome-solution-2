function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter 
  at the end of the string
    if the letters don't match, return false
   if we reach the middle, and all the letters match, return true
*/

/*
  Take an agrument (string), reads 1st letter and compares to last. 
  reads 2nd letter and compares to 2nd to last, and so on to determine
  if the letters are the same. If letters are the same it will result in "true",
  if letters are not, like in the case of 'robot', result will be "false"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
