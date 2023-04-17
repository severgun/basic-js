const { thrice } = require('sinon/lib/sinon/mock-expectation.js');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let count = 1;
    
    arr.forEach(element => {
      if(Array.isArray(element)){
        count = 1;
        count += this.calculateDepth(element);
      }
      depth = Math.max(depth, count);
    });

    return depth;
  }
}

module.exports = {
  DepthCalculator
};
