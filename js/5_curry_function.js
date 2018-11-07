// EXERCISE 2 - Curry fct

function curry(x) {

  return (y) => {
    return (z) => {
      return x * y * z
    };
  };

}

console.log("=>" + curry(2)(3)(4));

// console.log(prod(2)(3)(4));

// EXERCISE 3
function add(...args) {
  if (args.length < 2) {
    return add.bind(this, ...args);
  }
  const [x, y] = args;
  return x + y;
}

const sum = add(11, 2, 5);
console.log(sum);
console.log(`===> Exercise 5 END`);