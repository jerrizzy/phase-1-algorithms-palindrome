function isPalindrome(word) {
  // the convertToLowerCase uses the toLowerCase method to convert string to lowercase in case of uppercases
  // then uses replace method to check for non-alphanumeric(symbols, space, punctuations) values
  // and removes them
  let convertToLowerCase = word.toLowerCase().replace(/[^a-z0-9]/g, '') 
  let backString = '';

  for (i = convertToLowerCase.length - 1; i >= 0; i--){
    backString += convertToLowerCase[i]
  }
  if (backString === convertToLowerCase){
    return true
  } else {
    return false
  }
}

// 2nd solution
function isPalindrome(word) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversedWord = cleanedWord.split('').reverse().join('');

  // Compare the original cleaned string with its reverse
  return cleanedWord === reversedWord;
}

/* 
  Add your pseudocode here
  initialize an empty string to hold each value
  iterate through the string from its end to the begining 
  After iterating, add each iterated value to the empty string
  and compare it to the original string
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
