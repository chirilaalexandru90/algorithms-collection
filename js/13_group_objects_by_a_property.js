let people = [{
  name: 'A',
  age: 12
}, {
  name: 'B',
  age: 12
}, {
  name: 'A',
  age: 1
}];

function GroupBy(objectArray, prop) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[prop];

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {})
}

console.log(GroupBy(people, 'name'))