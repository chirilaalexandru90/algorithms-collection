// Return the most ocurring character in a strig
let str17 = "%%asd%%%%%#$%@%@$%@#^@$#^$#@$%@FDSVFXV DVDZVFZSDVCDSZFSDZVXZVZXDDDDDDDDDDDDDDDDDDDDDDDD%%%%";

function mostRecurringChar(text) {
  let charMap = {};
  let maxCharValue = 0;
  let maxChar = '';

  for(let char of text) {
    if (charMap.hasOwnProperty(char)){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log("17_Solution1:", mostRecurringChar(str17));
