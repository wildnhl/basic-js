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
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  let final = '';
  let additionArray = [];
  for (let i = 0; i < (additionRepeatTimes ?? 1); i++) {
    if (addition === null) {
      additionArray.push(String(addition));
    } else {
      additionArray.push(addition);
    }
  }
  final += str + additionArray.join(additionSeparator ?? '|');
  let array = [];
  for (let i = 0; i < (repeatTimes ?? 1); i++) {
    array.push(final);
  }
  return array.join(separator ?? '+');
}

module.exports = {
  repeater,
};
