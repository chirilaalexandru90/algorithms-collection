let arr = ['a', 'a', 'b', 1, 2, 2, 3];

let countedInstances = arr.reduce(function (allInstances, instance) {
  if (instance in allInstances) {
    allInstances[instance]++;
  } else {
    allInstances[instance] = 1;
  }
  console.log(allInstances);
  return allInstances;
}, {});

console.log('===> Exercise 12 END')