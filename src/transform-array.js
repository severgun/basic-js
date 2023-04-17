const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  const commands = new Set(['--discard-next', '--discard-prev', '--double-next', '--double-prev']);
  let result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
    if (commands.has(element)) {
      switch (element) {
        case '--double-next':
          if(idx < arr.length - 2) {
            result.push(arr[idx+1]);
          }
          break;
        case '--double-prev':
          if (idx > 1) {
            result.push(arr[idx-1]);
          }
          break;
        case '--discard-next':
          if(idx < arr.length - 2) {
            idx++;
            arr[idx] = undefined;
            result.push(arr[idx]);
          }
          break;
        case '--discard-prev':
          if (idx > 1) {
            result.pop()
          }
          break;
      
        default:
          break;
      }
    } else {
      result.push(arr[idx]);
    }
  }
  return result.filter(elem => elem !== undefined);
}

module.exports = {
  transform
};
