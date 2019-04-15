// Return the lowest index at which a value (second argument) 
// i.e **num** should be inserted into an array (first argument) 
// i.e **arr** once it has been sorted. The returned value should be a number. E.g

// whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater than 1(index 0), but less than 2(index 1).
let exArr = [1, 2, 3, 4, 5, 5, 6, 7, 3];

function indexRetriver(arr, value) {
  let index;
  let floorValue = Math.floor(value);

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(floorValue)) {
      index = arr.indexOf(floorValue);
    } else {
      index = 'Value not in array';
    }
  }

  return index;
}

console.log("28_Solution1_indexOf():", indexRetriver(exArr, 3));

function indexRetriverWithSort(arr, value) {
  arr.sort((a, b) =>  a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= value) {
      return i;
    }
  }

  return arr.length;
}

console.log("28_Solution2_sort:", indexRetriverWithSort(exArr, 3));

