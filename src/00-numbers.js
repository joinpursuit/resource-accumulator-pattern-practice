/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  let sum = 0;
  for (let value of values) {
    sum += value;
  }
  return sum;

}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  let multipliedValues = [];
  
  for (let value of values) {
    multipliedValues.push(value * 2);
  }
  return multipliedValues;
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let evenNumbers = [];

  for (let value of values) {
    if (value %2 === 0) {
      evenNumbers.push(value);
    }
  }
  return evenNumbers;
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  let result = null;
  for (let value of values) {
    if (value === val) {
      result = val;
    } 
  }
  return result;
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  let result = false;

  if (values.length === 0) {
    return result;
  } else { 
  for (let value of values) {
    if ( value < 0) {
    result = true;
    } 
    if ( value > 0) {
      return false;
    }
  }
  return result;
}
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
   let max = values[0];
   
   if (values.length === 0) {
     return null;
   } else {
   for (let value of values) {
     if (value > max) {
       max = value;
     }
   }
   return max;
   }
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
