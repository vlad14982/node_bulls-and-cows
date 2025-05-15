'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number = 0;

  while (true) {
    number = Math.floor(Math.random() * (9876 - 1023 + 1)) + 1023;

    const digits = new Set(number.toString().split(''));

    if (digits.size === 4) {
      return number;
    }
  }
}

module.exports = {
  generateRandomNumber,
};
