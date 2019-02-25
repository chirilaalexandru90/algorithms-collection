//Given a string of text, return the number of vowels found within the text e.g vowelsCounter('anehizxcv') // will return 3
let text = 'anehizxcv';
const vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
  let count = 0;

  for(let letter of text.toLowerCase()){
    if (vowels.includes(letter)){
      count ++;
    }
  }

  return count;
}

console.log("16_Solution1 - vowels in given string:", vowelsCounter(text));

function regexVowelsCounter(text) {
  let matchingVowels = text.match(/[aeiou]/gi);
  if (matchingVowels) {
    return matchingVowels.length;
  } else {
    return 0;
  }
}

console.log("16_Solution2 - vowels in given string:", regexVowelsCounter(text));
