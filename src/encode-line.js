const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let final = '';
  for (let i = 0; i < str.length; i++) {
    let value = str[i];

    if (value === str[i - 1]) {
      continue;
    }

    for (let j = i; j < str.length; j++) {
      if (value === str[j + 1]) {
        counter++;
      } else {
        break;
      }
    }
    if (counter < 2) {
      final += value;
    } else {
      final += counter + value;
    }

    counter = 1;
  }
  return final;
}

module.exports = {
  encodeLine,
};
