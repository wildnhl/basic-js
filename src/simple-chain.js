const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  final: [],
  getLength() {
    return this.final.length;
  },
  addLink(value) {
    this.final.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      typeof position === 'string' ||
      position >= this.final.length
    ) {
      this.final = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.final.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.final.reverse();
    return this;
  },
  finishChain() {
    const obj = this.final.join('~~');
    this.final = [];
    return obj;
  },
};

module.exports = {
  chainMaker,
};
