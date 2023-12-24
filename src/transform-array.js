const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const fin = [];
  const DISCARD_NEXT = '--discard-next';
  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_NEXT = '--double-next';
  const DOUBLE_PREV = '--double-prev';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === DISCARD_NEXT) {
      arr.splice(i, 1);
      continue;
    }

    if (arr[i - 1] === DOUBLE_NEXT) {
      fin.push(arr[i]);
    }
    if (arr[i + 1] === DISCARD_PREV) {
      arr.splice(i, 1);
      continue;
    }
    if (arr[i + 1] === DOUBLE_PREV) {
      fin.push(arr[i]);
    }
    if (
      arr[i] === DISCARD_NEXT ||
      arr[i] === DISCARD_PREV ||
      arr[i] === DOUBLE_NEXT ||
      arr[i] === DOUBLE_PREV
    ) {
      continue;
    } else {
      fin.push(arr[i]);
    }
  }
  return fin;
}

module.exports = {
  transform,
};
