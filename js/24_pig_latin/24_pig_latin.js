// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. 
// E.g "pig" = "igpay"

// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. 
// E.g "glove" = "oveglay"

// For words that begin with vowel sounds, simply add "way" to the end of the word. 
// E.g "explain" = "explainway”

const ex1 = 'pig';
const ex2 = 'glove';
const ex3 = 'explain';
const ex4 = 'guy';

function translateInPigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  function isFirstCharVowel() {
    return vowels.includes(word.toLowerCase()[0]);
  }

  function isSecondCharVowel() {
    return vowels.includes(word.toLowerCase()[1]);
  }

  if (isFirstCharVowel() && !isSecondCharVowel()) {
    return `${word}way`;

  } else if (!isFirstCharVowel() && isSecondCharVowel()) {
    return `${word.slice(1)}${word.slice(0, 1)}ay`;

  } else if (!isFirstCharVowel() && !isSecondCharVowel()) {
    return `${word.slice(2)}${word.slice(0, 2)}ay`;
  }
}

t1 = performance.now();
console.log('24_Solution1 with includes and slice:', translateInPigLatin(ex1), translateInPigLatin(ex2), translateInPigLatin(ex3), translateInPigLatin(ex4)); // igpay oveglay explainway
t2 = performance.now();
console.log(t2 - t1, "miliseconds");
