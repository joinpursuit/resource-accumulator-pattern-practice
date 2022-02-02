/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let result = '';
  if(words.length !== 0){
    for(let element of words){
      result += element;
    }
  }
  return result;
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let result = [];
  for(let i =0; i < words.length; i++){
    if(words.indexOf(words[i]) === words.lastIndexOf(words[i])){
      result.push(words[i] + words[i]);
    }
  }
  return result;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let result = [];
  for(let i =0; i < words.length; i++){
    if(words[i].length <= 4){
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
  let result = null;
  for(let i =0; i < words.length; i++){
    if(words[i].indexOf(character) !== -1){
      result = words[i];
      break;
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
  let result;
  for(let i =0; i < words.length; i++){
    if(words[i] === words[i].toUpperCase()){
      result = true;
    }else{result = false;}
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
  let result;
  for(let i=0; i < words.length; i++){
    if(words[i].length > words[0].length){
      result = words[i];
    }
    else {result = words[0];}
  }
  return result;
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
