/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  if (!words.length) {
    return "";
  } else {
    return words.join("");
  }
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
//Incomplete: Not repeating word
function repeatAllWords(words) {
  for (let index in words) {
    words[index] = `${words[index]}${words[index]}`;
  }
  return words;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */

function getSmallWords(words) {
  let fourLess = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= 4) {
      fourLess.push(words[i]);
    }
  }
  return fourLess;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(character)) {
      return words[i];
    }
  }
  return null;
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  let word = false;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].toUpperCase()) {
      word = true;
    } else {
      word = false;
    }
  }
  return word;
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
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
