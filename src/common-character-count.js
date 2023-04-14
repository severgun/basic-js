const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');

  function countCharFreqs(charFreqs, char) {
    if (charFreqs.has(char)) {
      charFreqs.set(char, charFreqs.get(char) + 1);
    } else {
      charFreqs.set(char, 1);
    }
    
    return charFreqs;
  }

  const charFreqStr1 = arr1.reduce(countCharFreqs, new Map());
  const charFreqStr2 = arr2.reduce(countCharFreqs, new Map());

  let sum = 0;
  charFreqStr1.forEach((freq, char) => {
    sum += Math.min(freq, charFreqStr2.get(char) || 0);
  });

  return sum;
}

module.exports = {
  getCommonCharacterCount
};
