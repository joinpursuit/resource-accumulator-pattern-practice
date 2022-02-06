/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let allTheWords = "";

  for (let word of words) {
    allTheWords += word;
  }
  return allTheWords;
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let allWordsRepeated = [];

  for (let word of words) {
    allWordsRepeated.push(word + word)
  }
  return allWordsRepeated;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let arrayWithSmallWords = [];

  for (let word of words) {
    if (word.length <= 4) {
      arrayWithSmallWords.push(word);
    }
  }
  return arrayWithSmallWords;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  let wordWithChar = null;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === character) {
        return words[i];
        break;
      } 
    }
 }
 return wordWithChar;
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === (words[i][j]).toUpperCase()) {
        result = true;
      } else {
        result = false;
      }
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
  let longestWord = words[0];

 for (let i = 0; i < words.length ; i++) {
  if (words[i].length > longestWord.length) {
   longestWord = words[i];
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
