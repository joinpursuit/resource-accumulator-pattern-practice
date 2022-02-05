/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
let result = [];

for (let i = 0; i < people.length; i++){
  result.push(people[i].name);

}
return result;
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
let result = {};

for (let i = 0; i < people.length; i++){
  if (people[i].name.toUpperCase() === name.toUpperCase()){
    result = people[i];// first time having to return the whole object. 
  } else {
    result = null;
  }
}
return result;
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
let result = [];
for (let i = 0; i < people.length; i++){
  if (people[i].age < 25){
    result.push(people[i]);
  }
}

return result;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
let result  = [];

for (let i = 0; i < people.length; i++){
  if (people[i].email.includes("gmail.com")){
    result.push(people[i]);
  }  
}

return result; 
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
