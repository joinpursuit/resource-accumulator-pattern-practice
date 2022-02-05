/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let finalStr = "";

if (words.length === 0){
  return finalStr;
} 
for (let i = 0; i < words.length; i++){
  finalStr += words[i];
}
  return finalStr;
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
let final = [];
if (words.length === 0){
  return final;
}
for (let i = 0; i < words.length; i++){
final.push(words[i]+words[i]);
}



return final;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 4) {
      result.push(words[i]);
    }
  }

  return result;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
let result = "";
for (word of words){
  if (word.includes(character)){
    result = word;
    break;
  } else {
    result = null;
  }

}  


return result;
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
let result = false;

for (word of words){
  if (word === word.toUpperCase()){
    result = true;
  } else {
    result = false;
  }
}

return result;
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let longestWord = ""
  for (let i = 0; i < words.length; i++){
     if (words[i].length > words[0].length ){
      longestWord = words[i];
     } else {
       longestWord = words[0];
     }

  }

return longestWord;
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
