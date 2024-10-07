function isPalindrome(word) {
  // Write your algorithm here
  let backString = '';

  for (i = word.length - 1; i >= 0; i--){
    backString += word[i]
  }
  if (backString === word){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  initialize an empty array to hold each value
  iterate through the string from its end
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
