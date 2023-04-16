const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let res = '';
  for (let index = 0, count = 1; index < arr.length; index++) {
    if (index > 0) {
      if (arr[index] === arr[index - 1]) {
        count++;
      } else {
        if (count === 1) {
          res += arr[index - 1];
        } else {
          res += count.toString() + arr[index - 1];
        }
        
        count = 1;
      }

      if (index === arr.length - 1) {
        if (count === 1) {
          res += arr[index];
        } else {
          res += count.toString() + arr[index];
        }
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
