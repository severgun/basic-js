const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = new Map();

  for (let index = 0; index < domains.length; index++) {
    let reversedDomain = domains[index].split('.').reverse();
    for (let k  = 0; k < reversedDomain.length; k++) {
      let key = '.' + reversedDomain.slice(0, k + 1).join('.');
      if (result.has(key)) {
        result.set(key, result.get(key) +  1);
      } else {
        result.set(key, 1);
      }
    }
  }

  return Object.fromEntries(result);
}

module.exports = {
  getDNSStats
};
