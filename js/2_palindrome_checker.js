// check if palindrome 
console.log(`==> Palindrom exercise START`);
const word = 'ama';
const anotherWord = 'something';
const arrayPalindrome = [1, 2, 3, 2, 1];

const PalindromeChecker = function (arg) {
    let tempArg = arg.toString().split("").reverse().join("");
    return (tempArg == arg);
}

console.log(PalindromeChecker(word)); // true
console.log(PalindromeChecker(anotherWord)); // false
console.log(PalindromeChecker(12345)); // false
console.log(PalindromeChecker(5995)); // true

console.log(PalindromeChecker({})); // false

console.log(`==> Palindrom exercise STOP`);