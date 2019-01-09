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

console.log(`${apple} reversed1  is: `, Reverser(apple));

// EX2: using reduce : cumulator + next
let str = 'abcdefg';
// Array.prototype.split = function(separator, limit) {}
const reverseStringFct = function (arg) {
  return arg.split("").reduce((accum, next) => next + accum);
}

let strReversed = reverseStringFct(str);
console.log(`${str} reversed2  is: `, strReversed);

console.log(`===> Exercise 1 END`);