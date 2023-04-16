const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    const row = matrix[rowIdx];
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      const element = matrix[rowIdx][colIdx];
      if (rowIdx === 0) {
        sum += element;
      } else {
        if (matrix[rowIdx - 1][colIdx] !== 0) {
          sum += element;
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
