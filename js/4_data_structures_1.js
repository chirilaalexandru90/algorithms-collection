// Exercise: Take the provided "data" and return an array of sums for each index of .data arrays
console.log(`===> Data structures exercise START`);

const data = [{
  "themes": [1, 4, 5, 7, 8, 9],
  "filtres": [{
    "filter": "< 20",
    "counts": [3, 2, 17, 4, 5, 8]
  }, {
    "filter": "20-30",
    "counts": [12, 2, 6, 5, 1, 3]
  }, {
    "filter": "> 30",
    "counts": [0, 1, 0, 0, 0, 2],
  }]
}];

const tempData = data[0].filtres;
const total = [];

for (let i of tempData) {
  total.push(...[i.counts]);
}

const result = total.reduce(function (prev, next) {
  next.forEach(function (b, i) {
    prev[i] = (prev[i] || 0) + b;
  });
  console.log(prev);
  return prev;
}, []);

console.log(`=> Data structures exercise STOP`);