let TestWord = 'deed'
function isPalindrome(word) {
  
  let value = ''
  if (typeof word == 'string') {
    let oldWord = []
    let newWord = []
    
    for ( i=0; i<word.length; i++) {
      oldWord.push(word[i])
    }

    
    for (i= word.length -1; i>=0; i--) {
      
      newWord.push(word[i])
      
    }
    console.log(oldWord)
    console.log(newWord)
    
   value = compareWords( oldWord, newWord)

  }
 return value
}

function compareWords( oldWord, newWord) {
if ( oldWord.toString() == newWord.toString()) {
  return true
}
else {
  return false
}
}



/* 
  Add your pseudocode here
1) function takes argument and checks if it is a string using typeof
2) if yes, create an array version of the original word
3) iterate through the original word and create an array that is the reverse order of the letters
4) compare the two arrays
5) run these arrays back to strings using toString() and compare them
6) if they are equal, return true, if not, return false

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
