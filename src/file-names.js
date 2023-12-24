const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const finalArr = [];
  let count = 1;
  let interimValue = '';
  for (const item of names) {
    for (const element of names) {
      if (item === element) {
        if (finalArr.includes(item)) {
          interimValue = item + `(${count})`;
          finalArr.push(interimValue);
          count++;
          break;
        } else {
          count = 1;
          finalArr.push(item);
          break;
        }
      }
    }
  }
  return finalArr;
}

module.exports = {
  renameFiles,
};
