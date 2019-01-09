let arrayToCheck = [10, 3, 4, 5, 6, 6, 7, 9];

let CheckIfContaninsConsecutive = function (arg) {
  let result = false;
  arg.forEach(function (num, i, arr) {
    if (num == arr[i + 1] - 1 && arr[i + 1] == arr[i + 2] - 1 && arr[i + 2] == arr[i + 3] - 1) {
      result = true;
    }
  });
  return result;
}

console.log(CheckIfContaninsConsecutive(arrayToCheck));
console.log(`===> Exercise 6 END`);