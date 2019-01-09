let inputString = 'asdfadsf aadf dsfd fdafadf';

function IndicesFinder(string, el) {
  let indices = [];
  let array = [...string];
  this.el = el;

  let index = array.lastIndexOf(el);

  while (index != -1) {
    indices.push(index);
    index = (index > 0 ? array.lastIndexOf(el, index - 1) : -1);
  }

  console.log(indices.reverse());
  return indices;
}

IndicesFinder(inputString, 'a');

console.log('===> Exercise 10 END');