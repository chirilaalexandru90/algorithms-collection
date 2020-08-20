// you are given an aray of integers, and a positive integer, k. 
//Find and print the pairs where and i+j is divisible by k (i+j)%k=0.

function divisibleSumPairs(k, ar) {
  count = [];
  for (i = 0; i < (ar.length - 1); i++) {
    for (j = i + 1; j < (ar.length); j++) {
      if ((ar[i] + ar[j]) % k == 0) count.push([ar[i], ar[j]]);
    }
  }
  return count;
}

// console.log('a', divisibleSumPairs(3, [1, 2, 3, 4, 5, 6]))

//EX
// X ax from 0 to infinite
// s is distance from origin of the first tree
// between a and b is the target zone (s < a < b < t)
// t is the distance from origin to the second tree
// Calculate how many fruits from 1st tree and second tree falls into a to b

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // console.log(apples.filter(d => s - a <= d && d <= t - a).length);
  // console.log(oranges.filter(d => s - b <= d && d <= t - b).length);
}

countApplesAndOranges(1, 5, 2, 4, [2, 3, 4], [3, 4, 5]);

//EX
// Kangaroo jump form its position a jump distance
// kangaroo(k1, jumpDistance1, k2, jumpDistance2)
// return true after both kangarooes jumped on the same step
// Constraint: from 0 to 10000

function kangarooJump(k1, jd1, k2, jd2) {
  for (let i = k1; i <= 100; i + jd1) {
    for (let j = k2; j <= 100; j + jd2) {
      if (i == j) {
        return 'YES';
      } else {
        return 'NO';
      }
    }
  }
}
kangarooJump(1, 2, 5, 4);

// EX: given an array of numbers, check how many are bigger than the previous one

function breakingRecords(games) {
  let lowestScore = games[0];
  let countLow = 0;
  let highScore = games[0];
  let countHigh = 0;

  for (const score of games) {
    if (highScore < score) {
      highScore = score;
      countHigh++;
    } else if (score < lowestScore) {
      lowestScore = score;
      countLow++;
    }
  }

  return [countHigh, countLow];
}

// console.log('breakingRecords', breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

// Ex chocolate bar - consider each elem of an array a chocolate square. Check if a number m is from the array and 
//counted with previous or next is equal with a given number n. Return number of times

function weirdCounter(arr, m, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n && arr[i - 1] + arr[i] == m ||
      arr[i] == n && arr[i + 1] + arr[i] == m) {
      count++;
    }
  }

  return count;
}

// console.log('weirdCounter', weirdCounter([4], 4, 1))


//check the element that appears most in an array. if there are 2 or more elements, return the smallest
function migratoryBirds(arr) {
  let filteredObj = {};
  let max = 0;
  let results = [];
  const allInstances = arr.reduce((all, index) => {
    if (index in all) {
      all[index]++;
    } else all[index] = 1;
    return all;
  }, {});

  for (let property in allInstances) {
    if (allInstances[property] >= 2) {
      filteredObj[property] = allInstances[property];
    }
  }
  max = Math.max(...Object.values(filteredObj));
  for (let prop in filteredObj) {
    if (filteredObj[prop] === max) {
      results.push(prop);
    }
  }
  return Math.min(...results);

}

// console.log('migr', migratoryBirds([4, 0, 1, 2, 2, 3, 3, 3, 4, 4]))



// Complete the cutTheSticks function below.
function cutTheSticks(arr) {

    let numberOfCuts = [];
    const arrayLength = arr.length;
  
    while (arr.length > 0) {
      let smallestValue = Math.min.apply(Math, arr);
      let counter = 0;
  
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] - smallestValue;
        counter++;
      };
  
      for (let j = 0; j < arrayLength; j++) {
        let zeroCheck = arr.indexOf(0);
        if (zeroCheck > -1) {
          arr.splice(zeroCheck, 1);
        }
      };
  
      numberOfCuts.push(counter);
    };
    
    return numberOfCuts;

}
// console.log('cutTheSticks', cutTheSticks([5, 4, 4, 2, 2, 8]))

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  let totalWithoutAnnaItem = bill.filter((el) => el != bill[k])
      .reduce((a, b) => a + b, 0);
  let costPerPerson = totalWithoutAnnaItem / 2;
  const result = 'Bon Appetit';
  if(costPerPerson == b) {
      return result;
  } else return b - costPerPerson
}

console.log(bonAppetit([3,10,2,9], 1, 7));
