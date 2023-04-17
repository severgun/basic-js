const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const filteredMembers = members.filter((elem) => {return (typeof elem === 'string' && elem.length > 0)});
  if (filteredMembers.length === 0) {
    return false;
  }

  let team = filteredMembers.map(elem => elem.trim().toUpperCase())
    .sort()
    .reduce((teamName, name) => {return teamName += name.at(0)}, "")
  return team;
}

module.exports = {
  createDreamTeam
};
