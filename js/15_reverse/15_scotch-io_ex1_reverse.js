// .reverse()
text = "something";

///// 1, 2) Build in ES6 and recursive functions
function arrayReverser(arr) {
  let result = [];
  let newArray = [];

  arr.forEach(element => {
    newArray.push(element);
  });
  let innerReversal = function (arg) {
    if (arg.length > 0) {
      result.push(arg.pop());
      innerReversal(arg);
    }
  };

  innerReversal(newArray);
  return result;
}
console.log("15_Solution1&2:", arrayReverser([...text]).join(''));

////// 3) For-Loop 

function forLoopReverse(text) {
  result = "";
  // for (let i = text.length - 1; i >= 0; i--) {
  //   result += text[i];
  // };
  for (let char of text) {
    result = char + result;
  }

  return result;
}
console.log("15_Solution3:", forLoopReverse(text));

////// 4) Recursive Way with .substr()

function recursiveWayReverse(text) {
  if (text === "") {
    return "";
  } else {
    return recursiveWayReverse(text.substr(1)) + text[0];
  }
}
console.log("15_Solution4:", recursiveWayReverse(text));

///// 5) with reduce()

function withReduce( text) {
  return [...text].reduce((acc, next) => next + acc);
}
console.log("15_Solution5", withReduce(text));