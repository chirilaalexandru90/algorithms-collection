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

function translateInPigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  function firstChar() {
    return vowels.includes(word.toLowerCase()[0]);
  }

  function secondChar() {
    return vowels.includes(word.toLowerCase()[1]);
  }

  if (firstChar() && !secondChar()) {
    return `${word}way`;

  } else if (!firstChar() && secondChar()) {
    return `${word.slice(1)}${word.slice(0, 1)}ay`;
    
  } else if (!firstChar() && !secondChar()) {
    return `${word.slice(2)}${word.slice(0, 2)}ay`;
  }
}

console.log('24_Solution1:', translateInPigLatin(ex1), translateInPigLatin(ex2), translateInPigLatin(ex3)); // igpay oveglay explainway