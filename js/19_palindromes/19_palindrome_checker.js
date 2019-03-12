const word = 'asdfghgfdsa';

function palindromeChecker(text) {
  let reversedText = [...text].reverse().join('');

  return text === reversedText
}

console.log("19_Solution1 with .reverse():", palindromeChecker(word));

function palindromeCheckerWithLooping(text) {
  let charArray = text.toLowerCase().split('');

  let result = charArray.every((letter, index) => {
    return letter === charArray[charArray.length - index - 1]
  })

  return result;
}

console.log("19_Solution2 with .every():", palindromeCheckerWithLooping(word));

function palindromeCheckWithClassicFor(text) {
  let textLength = text.length;
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[textLength - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log("19_Solution3 with classic for:", palindromeCheckerWithLooping(word));
