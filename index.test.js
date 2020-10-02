const {isPalindrome} = require('./index');

test('10 is not a palindrome', () => {
    expect(isPalindrome(10)).toBeFalsy();
})

test('15 is not a palindrome', () => {
    expect(isPalindrome(15)).toBeFalsy();
})

test('11 is a palindrome', () => {
    expect(isPalindrome(11)).toBeTruthy();
})

test('330033 is a palindrome', () => {
    expect(isPalindrome(330033)).toBeTruthy();
})

test('330034 is not a palindrome', () => {
    expect(isPalindrome(330034)).toBeFalsy();
})
