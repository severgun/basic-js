const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(msg, key) {
    if (typeof msg !== 'string' || typeof key !== 'string' ) {
      throw new Error('Incorrect arguments!');
    }
    msg = msg.toUpperCase().split('');
    key = key.toUpperCase().split('');

    while (key.length < msg.length) {
      key = key.concat(key);
    }

    let result = [];
    for (let idx = 0, keyIdx = 0; idx < msg.length; idx++) {
      const element = msg[idx];
      if (element.match(/[A-Z]/)) {
        let row = this.alphabet.indexOf(element);
        let col = this.alphabet.indexOf(key[keyIdx]);
        let encChar = this.alphabet.charAt((row + col) % 26);
        result.push(encChar);
        keyIdx++;
      } else {
        result.push(element);
      }
    }

    return this.mode ? result.join('') : result.reverse().join('');
  }

  decrypt(encMsg, key) {
    if (typeof encMsg !== 'string' || typeof key !== 'string' ) {
      throw new Error('Incorrect arguments!');
    }
    encMsg = encMsg.toUpperCase().split('');
    key = key.toUpperCase().split('');

    while (key.length < encMsg.length) {
      key = key.concat(key);
    }

    let result = [];
    for (let idx = 0, keyIdx = 0; idx < encMsg.length; idx++) {
      const element = encMsg[idx];
      if (element.match(/[A-Z]/)) {
        let row = this.alphabet.indexOf(key[keyIdx]);
        let col = this.alphabet.indexOf(encMsg[idx]);
        let char = this.alphabet.charAt((26 - row + col) % 26);

        result.push(char);
        keyIdx++;
      } else {
        result.push(element);
      }
    }

    return this.mode ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
