let sentenceSR = "He is Sleeping on the couch";
let searchedWord = "Sleeping";
let replaceWord = "sitting";

function searchReplace(sentence, searched, replace) {
  let transformedSentence = sentence.split(`${searched}`).join(`${replace}`);
  return transformedSentence;
}
console.log(performance.now());
console.log('22_Solution1 with split:', searchReplace(sentenceSR, searchedWord, replaceWord));
console.log(performance.now());


function searchReplaceR(sentence) {
  let transformedSentence = sentence.replace(searchedWord, replaceWord);
  return transformedSentence;
}
console.log(performance.now());
console.log('22_Solution2 with replace:', searchReplaceR(sentenceSR));
console.log(performance.now());
