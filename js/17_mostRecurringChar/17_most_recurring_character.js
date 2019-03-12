// Return the most ocurring character in a strig
let str17 = "%%asd%%%%%#$%@%@$%@#^@$#^$#@$%@FDSVFXV DVDZVFZSDVCDSZFSDZVXZVZXDDDDDDDDDDDDDDDDDDDDDDDD%%%%";

function mostRecurringChar(text) {
  let charMap = {};
  let charOcurranceCounter = 0;
  let maxChar = '';

  for(let char of text) {
    if (charMap.hasOwnProperty(char)){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > charOcurranceCounter) {
      charOcurranceCounter = charMap[char];
      maxChar = char;
    }
  }
  console.log(`Solution1: "${maxChar}" is ${charOcurranceCounter} times displayed`);
  return maxChar;
}

console.log("17_Solution1:", mostRecurringChar(str17)); // FASTER!

///// Solution 2: Forming Arrays from the Character Map

function maxRecurringChar(text) {
  let charMap = {};
  let charArray = [];
  let valuesArray = [];
  let charOcurranceCounter = [];

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap);
  valuesArray = Object.values(charMap);
  charOcurranceCounter = Math.max(...valuesArray);

  return charArray[valuesArray.indexOf(charOcurranceCounter)];
}

console.log("17_Solution2:", maxRecurringChar(str17));
