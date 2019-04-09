//Given two or more arrays, write a function that combines their elements into one array without any repetition

let array26 = [1, 2, 3, 3, 3];
let array27 = [1, 4, 5, 2]; // should return [1,2,3,4,5]

function mergeArrays(...arrs) {
  let temp = [];
  let result = [];

  [...arrs].forEach(array => {
    temp = [...temp, ...array];
  });

  for (let el of temp) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }

  return result;
}

console.log("26_Solution1_with_spread", mergeArrays(array26, array27));

function noDuplicatesWithSets(...arrs) {
  let joinedArrays = [];

  arrs.forEach(array => {
    joinedArrays = [...joinedArrays, ...array]
  });

  return [...new Set([...joinedArrays])];
}

console.log("26_Solution2_with_sets", noDuplicatesWithSets(array26, array27));

function noDuplicatesWithFilter(...arrs) {
  let joinedArrays = [];

  [...arrs].forEach(array => {
    joinedArrays = [...joinedArrays, ...array];
  });

  let result = joinedArrays.filter((el, index) => joinedArrays.indexOf(el) === index);

  return result;
}

console.log("26_Solution3_with_filter", noDuplicatesWithFilter(array26, array27));

function noDuplicatesWithReduce (...arrs) {
  let joinedArrays = [];
  let result = [];

  [...arrs].forEach(array => {
    joinedArrays = [...joinedArrays, ...array];
  });

  result = joinedArrays.reduce((acc, next) => {
    if(!joinedArrays.includes(next)) {
      acc.push(next);
    }
  });

  return result;
}

console.log("26_Solution4_with_reduce", noDuplicatesWithFilter(array26, array27));
