let sentence = 'Given a sentence containing two or more words, return the equivalent of the sentence when capitalized.';

function forEachSentenceCapitalization(text) {
  let tempSentenceArray = text.toLowerCase().split(' ');
  let newSentence = [];

  tempSentenceArray.forEach(word => newSentence.push(word[0].toUpperCase() + word.slice(1)));

  return newSentence.join(' ');
}

console.log("18_Solution1 with forEach:", forEachSentenceCapitalization(sentence));

// obj1 = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// let ob = Object.keys(obj1);
// for (let key of Object.keys(obj1)) {
//   console.log(key);
// }

function mapSliceCapsSentence(text) {
  let tempSentenceArray = text.toLowerCase().split(' ');

  let capsSentenceArray = tempSentenceArray.map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });

  return capsSentenceArray.join(' ');
}

console.log("18_Solution2 with map and slice:", mapSliceCapsSentence(sentence));

function mapReplaceCapsSentence(text) {
  let tempSentence = text.toLowerCase().split(' ');

  let transformedSentenceArray = tempSentence.map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  });

  return transformedSentenceArray.join(' ');
}

console.log('18_Solution3 with map and replace', mapReplaceCapsSentence(sentence));