/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
let total = 0;
  for (const element of values){
    total+= element;
  }

return total;

}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
const newArr = [];

for (const element of values){
  newArr.push(element * 2);
}

return newArr;
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
const newArr = [];

for (let i = 0; i < values.length; i++){
  if (values[i] % 2 === 0){
    newArr.push(values[i]);
  }
}

return newArr;
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
let foundNum = null;

if (values.includes(val)){
  foundNum = val;
}

return foundNum;
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  let allNeg = true;

  if(values.length === 0){
    allNeg = false;;
  }

  for(let value of values){
    if(value > 0){
      allNeg = false;
    }
  }
return allNeg;
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
let largeNum  = values[0];
if (values.length === 0 ){
  return null;
}

for (let i = 1; i < values.length; i++){
if (values[i] > largeNum){
  largeNum = values[i];
}

}


return largeNum;

}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
