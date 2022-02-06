/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let nameArr = [];
  for (let i = 0; i < people.length; i++) {
    //console.log(people[i].name);
    // console.log("++++++++++++++++++++++++++");
    nameArr.push(people[i].name);
  }
  return nameArr;
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name.toUpperCase() == name.toUpperCase()) {
      return people[i];
    }
  }
  return null;
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  under25 = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age < 25) {
      under25.push(people[i]);
    }
  }
  return under25;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let hasEmail = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].email.includes("gmail.com")) {
      hasEmail.push(people[i]);
    }
  }
  return hasEmail;
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
