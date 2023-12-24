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
  if (domains.length === 0) return {};
  const arr = domains.map((item) => {
    return item.split('.').reverse();
  });
  const arrJoin = arr.map((item) => {
    return '.' + item.join('.');
  });
  const checkArr = ['.' + arr[0][0], ...arrJoin];
  const obj = {};
  for (let i = 0; i < checkArr.length; i++) {
    let count = 0;
    arrJoin.forEach((item) => {
      if (item.includes(checkArr[i])) {
        count++;
        obj[`${checkArr[i]}`] = count;
      }
    });
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
