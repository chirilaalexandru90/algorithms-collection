const sentenceLongestWord = 'Finding the Longest Word In a Sentence';

function longestWord(sentence) {
  const sentenceToArray = sentence.split(' ');
  let maxLength = 0;
  let longestWord = '';

  for (let i = 0; i < sentenceToArray.length; i++) {
    if (sentenceToArray[i].length > maxLength) {
      maxLength = sentenceToArray[i].length;
      longestWord = sentenceToArray[i];
    }
  }

  return longestWord;
}

console.log('21_Solution1 with for:', longestWord(sentenceLongestWord));

function longestWordWithReduce(sentence) {
  let result = sentence.split(' ').reduce((longestWord, currentWord) => {
    if(currentWord.length > longestWord.length){
      return currentWord;
    } else {
      return longestWord;
    }
  });
  return result;
}

console.log('21_Solution2 with .reduce():', longestWordWithReduce(sentenceLongestWord));