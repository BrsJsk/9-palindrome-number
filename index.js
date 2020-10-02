/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arrayOfNumbers = Array.from(String(x), Number);
    const reversedNumber = Number(arrayOfNumbers.reverse().join(""));

    return x === reversedNumber;
};

module.exports = {isPalindrome}
