const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function formRepeatedStr (str, count, separator) {
    let result = '';
    for (let idx = 0; idx < count - 1; idx++) {
      result += str + separator;
    }
    result += str;

    return result;
  }

  let additionStr = '';
  if (options.hasOwnProperty("addition")) {
    let additionSeparator = '|';
    if (options.hasOwnProperty("additionSeparator")) {
      additionSeparator = options['additionSeparator'] + '';
    }
    additionStr = formRepeatedStr( options['addition'] + '', options['additionRepeatTimes'], additionSeparator);
  }

  let separator = '+';
  if (options.hasOwnProperty("separator")) {
    separator = options['separator'] + '';
  }

  return formRepeatedStr(str + additionStr, options['repeatTimes'], separator);
}

module.exports = {
  repeater
};
