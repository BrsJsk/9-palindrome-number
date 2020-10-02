#1 
```
const arrayOfNumbers = Array.from(String(x), Number);
const reversedNumber = Number(arrayOfNumbers.reverse().join(""));

return x === reversedNumber;
```

```
Runtime: 244 ms, faster than 33.77% of JavaScript online submissions for Palindrome Number.
Memory Usage: 49.4 MB, less than 8.23% of JavaScript online submissions for Palindrome Number.
```

#2 
```
const arrayOfNumbers = Array.from(String(x), Number);
const reversedNumber = Number(arrayOfNumbers.reverse().join(""));

return x == reversedNumber;
```

```
Runtime: 216 ms, faster than 69.15% of JavaScript online submissions for Palindrome Number.
Memory Usage: 49.6 MB, less than 7.81% of JavaScript online submissions for Palindrome Number.
```
