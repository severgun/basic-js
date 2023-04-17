const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  n = n.toString();
  n = n.split('');

  for (let i = 0; i < n.length; i++) {
    let arr = [];
    for (let k = 0; k < n.length; k++) {
      if (i !== k) {
        arr.push(n[k]);
      }
    }
    let val = +arr.join('');
    if (val > max) {
      max = val;
    }
  };

  return max;
}

module.exports = {
  deleteDigit
};