const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const str = String(n)
    .split('')
    .map((item) => +item);
  const final = str.reduce((accum, cur) => {
    return accum + cur;
  }, 0);
  if (String(final).split('').length > 1) {
    return getSumOfDigits(final);
  }
  return final;
}

module.exports = {
  getSumOfDigits,
};
