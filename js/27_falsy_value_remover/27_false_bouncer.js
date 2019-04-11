// False bouncer - remove falsy values: false, null, undefined, 0, NaN, and "".

let arrayOfFalsies = [1, 0, null, '', 5]; // [1, 5]

function falsyRemover(arr) {
  let result = [];

  arr.forEach(el => {
    if (el) {
      result.push(el);
    }
  });

  return result;
}

console.log("27_Solution1_forEach", falsyRemover(arrayOfFalsies));

function falsyBouncer(array) {
  let result = [];

  for (value of array) {
    if (value) {
      result.push(value)
    }
  }

  return result;
}

console.log("27_Solution2_for_of", falsyBouncer(arrayOfFalsies));

function falsyBouncerWithFilter(arr) {
  // v1
  // return arr.filter(el => {
  //   return Boolean(el)
  // });

  // v2
  // return arr.filter(Boolean);

  // v3
  return arr.filter(el => el);
}

console.log("27_Solution3_filter", falsyBouncerWithFilter(arrayOfFalsies));
