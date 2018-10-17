console.log(`=> Reverse string function START`);
// EX1: recursive algorithms - replace reverse() function

const apple = [1, 2, 3, 4, 5];

const Reverser = function (arr) {
    let result = [];
    let newArr = [];
    arr.forEach(el => newArr.push(el));

    // recursive fct
    let inner = function (arg) {
        if (arg.length > 0) {
            result.push(arg.pop());
            inner(arg);
        }
    }
    inner(newArr);
    return result;
};

console.log(Reverser(apple));

// EX2: using reduce : cumulator + next
let str = 'abcdefg';
// Array.prototype.split = function(separator, limit) {}
const reverseStringFct = function (arg) {
    return arg.split("").reduce(function (accum, next) {
        return next + accum;
    });
}

let strReversed = reverseStringFct(str);
console.log(strReversed);

console.log(`=> Reverse string function END`);