// Given two strings of equal length, calculate and return the the hamming distance.

// strings lengths equal
// check every char in both str if it corresponds on specific index
// calculate and return the hamming distance

const string1 = 'abcssgh';
const string2 = 'abeasgh';

function hammingDistance(s1, s2) {
  counter = 0;
  str1 = [...s1];
  str2 = [...s2];

  if (str1.length == str2.length) {
    str1.forEach((element, index) => {
      if (element != str2[index]) {
        return counter++;
      }
    });
  } else console.log('Strings should have the same length');

  return counter;
}

console.log('20_Solution1 with forEach():', hammingDistance(string1, string2));