/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  return words.join('');
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let arr=[];
  if(!words.length){
    return arr;
  }
  for(let i=0; i< words.length; i++){
    arr.push(words[i] + words[i]);
  }
  return arr;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let arr=[];
  for(let word of words){
    if(word.length <=4){
      arr.push(word);
    }
  }
  return arr;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  let found= null;
  for(let word of words){
    if(word.includes(character)){
      found= word;
      break;
    }
  }
  return found;
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  let retVal= true;
  for(let word of words){
    if(word !== word.toUpperCase()){
      retVal= false;
    }
  }
  return retVal;
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let longest= words[words.length-1]
  for(let i= words.length-2; i>= 0; i--){
    if(longest.length <= words[i].length){
      longest= words[i];
    }
  }
  return longest;
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
