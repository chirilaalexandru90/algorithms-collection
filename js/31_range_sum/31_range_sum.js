// sum up numbers within a specified range
// Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. E.g
// rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9

let range = [7, 9];

function rangeSum(arr) {
  result = 0;

  for(let i = arr[0]; i <= arr[1]; i++) {
    result += i;
  }

  return result;
}

console.log(rangeSum(range));