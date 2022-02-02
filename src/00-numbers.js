/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  let sum=0;
  for(let num of values){
    sum+= num;
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
  let arr=[];
  for(let num of values){
    arr.push(num*2);
  }
  return arr;
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let arr=[];
  for(let num of values){
    if(!(num%2)){
      arr.push(num);
    }
  }
  return arr;
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  let found= null;
  for(let num of values){
    if(num === val){
      found= num;
    }
  }
  return found;
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  if(!values.length){
    return false;
  }
  let negative = false;
  for(let num of values){
    //num = Number(num);
    if(num < 0){
      negative = true;
      //return negative;
    } else if(num === 0){
      continue;
    } else {
      negative = false;
      return negative;
    }
  }
  return negative;
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  if(!values.length){
    return null;
  }
  let largest= values[0];
  for(let val of values){
    if(val > largest){
      largest=val;
    }
  }
  return largest;
}


module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
