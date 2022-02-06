/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let names = [];
  
  for (let person in people) {
    names.push(people[person].name);
  }
  return names;

}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
   let noMatchingName = null;
   let firstName = (name.charAt(0)).toUpperCase() + name.slice(1,name.indexOf(" "));
   let lastName = (name.charAt(name.indexOf(" ") + 1)).toUpperCase() + name.slice(name.indexOf(" ") + 2,name.length);
   
  for (let person in people) {
    if (people[person].name === `${firstName} ${lastName}`) {
      return people[person];
    } 
  }
  return noMatchingName;
  
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let lessThan25 = [];

  for (let person in people) {
    if (people[person].age < 25) {
      lessThan25.push(people[person]);
    }
  }
  return lessThan25;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let peopleWithGmail = [];
  for (let person in people) {
    index = people[person].email.indexOf("@") + 1;
      if(people[person].email.charAt(people[person].email.indexOf("@") + 1) === "g") {
      peopleWithGmail.push(people[person]);
      }
       }
       return peopleWithGmail;
  }


module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
