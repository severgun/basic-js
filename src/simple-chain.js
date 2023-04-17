const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  SEPARATOR: '~~',
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join(this.SEPARATOR);
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))

// console.log(
//   chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain()
// );

// console.log(
//   '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )'
// );