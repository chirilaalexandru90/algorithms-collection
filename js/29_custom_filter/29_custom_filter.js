// Build a JS .filter() function
//Return the first element from the given array that passes the test specified by the provided function. 
// Both the array and function are passed into the function as arguments as:

// arrayFilter(arr, func)

//func returns true/ false

let exArray = [0, 1, 2, 3, 4];

function arrayFilter(arr, func) {
  let result = [];
  for (let elem of arr) {
    if (func(elem)) {
      result.push(elem);
      console.log("2", result)
    }
  }
  return result;
}

console.log("29_Solution1:", arrayFilter(exArray, function (arg) { return arg % 2 === 0; }), exArray.filter(el => { return el % 2 === 0 }));