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
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  function amount(arr, finder) {
    let count = 0;
    arr.split('').forEach((item) => {
      if (item === finder) {
        count++;
      }
    });
    return count;
  }

  let lastItem = [];
  s1.split('').forEach((item) => {
    if (!lastItem.includes(item) && s2.split('').includes(item)) {
      const one = amount(s1, item);
      const two = amount(s2, item);
      counter += Math.min(one, two);
    }
    lastItem.push(item);
  });
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
