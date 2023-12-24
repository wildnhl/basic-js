const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split('');
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const arr = [...str];
    arr.splice(i, 1);
    const value = +arr.join('');
    if (max < value) {
      max = value;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
