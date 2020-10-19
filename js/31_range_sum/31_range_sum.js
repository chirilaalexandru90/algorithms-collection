// sum up numbers within a specified range
// Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. E.g
// rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9

let range = [7, 9];

function rangeSum(arr) {
  result = 0;

  for (let i = arr[0]; i <= arr[1]; i++) {
    result += i;
  }

  return result;
}

console.log("rangeSum", rangeSum(range));

// check indexes and count which one has more bigger values
function compareTriplets(a, b) {
  let result = [0, 0];
  for (let i = 1; i <= 3; i++) {
    if (a[i] > b[i]) {
      result[0] += 1;
    } else if (a[i] < b[i]) {
      result[1] += 1;
    }
  }
  return result;
}

console.log('compareTriplets', compareTriplets([17, 28, 30], [99, 16, 8]));

// diagonalDifference algorithm

let matrixExample = [
  [1, 2, 3, 4],
  [4, 5, 6, 5],
  [7, 8, 9, 7],
  [7, 8, 9, 7]
];

function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - i - 1];
  }
  if (sum1 - sum2 < 0) {
    return (sum1 - sum2) * -1;
  } else return sum1 - sum2;
}

console.log("diagonalDifference", diagonalDifference(matrixExample));

// Given an array of integers, calculate the fractions of its elements that are:
// positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
let arrForPlusMinus = [-4, 3, -9, 0, 4, 1]; // should return 0.4 (2/5 for 2 positive 1s) 0.4 (2/5 for 2 negative -1s) and 0.2 (1/5 for 0s)
function plusMinus(arr) {
  let storage = { "positive": 0, "negative": 0, "zero": 0 };
  arr.forEach(el => {
    if (el > 0) {
      storage.positive += 1;
      // console.log(storage)
    } else if (el < 0) {
      storage.negative += 1;
    } else if (el == 0) storage.zero += 1;
  });

  console.log(storage.positive / arr.length);
  console.log(storage.negative / arr.length);
  console.log(storage.zero / arr.length);
}

console.log("plusMinus", plusMinus(arrForPlusMinus));

// Consider a staircase of size :

//    #
//   ##
//  ###
// ####

// Write a program that prints a staircase of size n.

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${' '.repeat(n - i)}${'#'.repeat(i)}`)
  }
}

staircase(6);

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// [1,3,5,7,9] should print 16 24

function miniMaxSum(arr) {
  let tempArr = arr.sort();
  if (tempArr.length == 5) {
    let minSum = tempArr.reduce((acc, next) => next + acc) - tempArr[4];
    let maxSum = tempArr.reduce((acc, next) => next + acc) - tempArr[0];
    console.log('miniMaxSum', minSum, maxSum)
  }
}

miniMaxSum([1, 3, 5, 7, 9]);

// Take an array and count how many max integers are

function maxIntegerCounter(arr) {
  let max = 0;
  let counter = 0;
  arr.forEach(el => {
    if (el > max) {
      max = el;
    }
  });

  arr.forEach(el => {
    if (el === max) {
      counter++;
    }
  });

  return counter;
}

console.log('maxIntegerCounter', maxIntegerCounter([33, 33, 2]));


// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//Input 07:05:45PM -- output: 19:05:45

function timeConversion(s) {
  let givenTime = s.split(':');
  let hours = givenTime[0];
  let minutes = givenTime[1];
  let seconds = givenTime[2].split('').slice(0, 2).join('');
  let format = givenTime[2].split('').slice(2, 4).join('');

  if (format === 'PM') {
    hours = parseInt(givenTime[0]);
    hours = (hours + 12).toString();
    console.log(hours)
    if (hours === '00') {
      hours = '12';
    } else if (hours === '24') {
      hours = '12';
    }
  }
  else if (format === 'AM') {
    hours = hours.toString();
    if (hours === '12') {
      hours = '00';
    } else if (hours === '00') {
      hours = '12';
    }
  }

  return (`${hours}:${minutes}:${seconds}`)
}

console.log(timeConversion('12:45:00PM'));

// Given an string and a number ("n" < array.length) as input, return lexicographical order of concatenated combinations of characters to 
// a length equal with give array .length and return array[n]

let arrayOfLetters = [...'abcd'].sort();
let storeArray = [];

function k_combinations(set, k) {
  var i, j, combs, head, tailcombs;

  // There is no way to take e.g. sets of 5 elements from
  // a set of 4.
  if (k > set.length || k <= 0) {
    return [];
  }

  // K-sized set has only one K-sized subset.
  if (k == set.length) {
    return [set];
  }

  // There is N 1-sized subsets in a N-sized set.
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    // head is a list that includes only our current element.
    head = set.slice(i, i + 1);
    // We take smaller combinations from the subsequent elements
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    // For each (k-1)-combination we join it with the current
    // and store it to the set of k-combinations.
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}
// result=   k_combinations(arrayOfLetters, 3)

for (i = 0; i < arrayOfLetters.length; i++) {
  storeArray.push(k_combinations(arrayOfLetters, i))
}

let rr = [];

for (i = 0; i < arrayOfLetters.length; i++) {
  rr.push(storeArray[i])
}

// count how many numbers in an array are related where the absolute difference between any two elements is less than or equal to 1

function pickingNumbers(a) {
  return [...new Set(a)].reduce((uniqueValue, nextUniqueValue) => {
    return Math.max(uniqueValue,
      a.reduce((counter, nextCounter) =>
        counter += (nextCounter === nextUniqueValue ||
          nextCounter === nextUniqueValue + 1), 0))
  }, 0)
}

//An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
/*
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path 'UDDDUDUU'
 */

function countingValleys(path) {
  let pathAr = path.split('');
  let seaLevel = 0;
  let seaLevelMap = [];
  let mountainOrValeyMap = [];
  let countValeys = 0

  pathAr.forEach(step => {
    if (step === 'U') {
      seaLevel += 1;
      seaLevelMap.push(seaLevel);
    } else if (step === 'D') {
      seaLevel = seaLevel - 1;
      seaLevelMap.push(seaLevel);
    }
  });

  mountainOrValeyMap = seaLevelMap.join('').split(0).map(e => e.split(''));
  mountainOrValeyMap.forEach(arr => {
    if (arr && arr[0] && arr[0].split('')[0] === '-') {
      countValeys += 1;
    }
  });
  return countValeys;
}
//////////////
function countingValleys(s) {
  let currLevel = 0;
  let valleys = 0;

  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'U') {
      currLevel += 1;
      if (currLevel == 0) {
        valleys += 1;
      }
    } else {
      currLevel -= 1;
    }
  }
  return valleys;
}

// Taking a book with pages numbers like 1 2&3 4&5 6&7 .... n&n+1 , return the minimum number of pages to turn from start or from the end of the book
function pageCount(pages, p) {
  let counter = 0;

  if (pages / 2 < p) {
    counter = Math.floor((pages - p) / 2);
    if (pages - p === 1 && pages % 2 === 0) counter = 1;
  } else {
    counter = Math.floor(p / 2);
  }
  return counter
}
//////
function pageCount(n, p) {
  const pageTurns = Math.floor(p / 2);
  const totalTurns = Math.floor(n / 2);
  return Math.min(pageTurns, totalTurns - pageTurns);
}


// Having a budget, a person needs to detemine what is the most expensive 2 combinations on purchases from 2 lists
//int item1[n]: the items1 prices
//int items2[m]: the drive prices
//int b: the budget
function getMoneySpent(items1, items2, budget) {
  return items1.reduce((item1, currentItem1) =>
    Math.max(item1, ...items2.map(u => u + currentItem1).filter(k => budget >= k)), -1);
}


// climbing leaderboard
// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:
// The player with the highest score is ranked number  on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

// example 1 climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]) returns [6, 5, 4, 2, 1]
// example 2 climbingLeaderboard([64, 58, 59 ,100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]) returns [9, 5, 4, 2, 1]
// example 3 climbingLeaderboard([49, 64, 58, 59, 100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]) returns SAME [9, 5, 4, 2, 1]

function climbingLeaderboard(scores, alice) {
  let result = []
  let uniqueScores = [...new Set(scores)].sort((a, b) => b - a);
  let position = uniqueScores.length - 1;
  let aliceScores = alice.sort((a, b) => a - b);

  aliceScores.forEach(aCurScore => {
      while (position >= 0) {
          if (aCurScore >= uniqueScores[position]) {
              position--;
          } else {
              result.push(position + 2);
              break
          }
      }

      if (position < 0) { result.push(1); }
  })

  return result
}