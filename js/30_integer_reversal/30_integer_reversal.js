// Given an integer, return an integer that has the reverse ordering of that which was received. E.g

// reverseInteger(-123) // should return -321
// Keep the following rules in mind:

// The signs must not change i.e -123 becomes -321
// The value returned must be an integer.
// All insignificant zeroes must be removed i.e 900 becomes 9 and not 009

let int1 = -123;
let int2 = 900;

function integerReversal(integer) {
  let result = 0;

  if (typeof (integer) === 'number') {
    let numberToReverse = Math.floor(integer);

    if (numberToReverse < 0) {
      result = toNumber(numberToReverse) * - 1;
    } else result = toNumber(numberToReverse);

  } else console.log("Not a number");

  function toNumber(str) {
    return parseInt([...(str).toString()].reverse().join(''));
  }

  return result;
}

console.log("30_Solution1:", integerReversal(int1), integerReversal(int2));