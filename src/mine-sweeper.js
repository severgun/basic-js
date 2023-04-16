const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    let resultRow = [];
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      const cellValue = matrix[rowIdx][colIdx];
      let minesCount = 0;
      if (cellValue) {
        resultRow.push(1);
      } else {
        let coords = [
          [rowIdx - 1, colIdx - 1],
          [rowIdx - 1, colIdx],
          [rowIdx - 1, colIdx + 1],
          [rowIdx, colIdx + 1],
          [rowIdx + 1, colIdx + 1],
          [rowIdx + 1, colIdx],
          [rowIdx + 1, colIdx - 1],
          [rowIdx, colIdx - 1]
        ];

        coords.forEach(elem => {
          if (elem[0] >= 0 && elem[1] >= 0 && elem[0] < matrix.length && elem[1] < matrix[rowIdx].length) {
            if (matrix[elem[0]][elem[1]]) {
              minesCount++;
            }
          }
        });

        resultRow.push(minesCount);
      }
    }
    result.push(resultRow);
  }

  return result
}

module.exports = {
  minesweeper
};
