/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values){
  let result =0;
  for(let val of values){
    result += val;
  }
  return result;
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  let result = [];
  for(let val of values){
    result.push(val * 2);
  }
  return result;
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let result = [];
  for(let val of values){
    if(val % 2 === 0){
      result.push(val);
    }
  }
  return result;  
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  let result =null;
  for(let i =0; i < values.length; i++){
    if(values[i] === val){
      result = val;
    }
  }
  return result;
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes 
 * all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  let result=false;
  for(let i =0; i < values.length; i++){
    if(values[i] === 0){
      break;
    }
    if(values[i] < 0){
      result = true;
    }
  }
  return result;
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  let num  = values[0],
      result = null;
  if(values.length !== 0){
    for(let i =0; i < values.length; i++){
      if(values[i] > num){
        num = values[i];
      }
      result = num;
    }
  }
  return result;
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
