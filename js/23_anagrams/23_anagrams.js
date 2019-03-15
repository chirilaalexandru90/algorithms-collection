let word1 = 'listen-';
let word2 = 'silent-';

function anagrams(word1, word2) {
  const sanitize = function (str) {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
  };
  return sanitize(word1) == sanitize(word2);
}

console.log('23_Solution1:', anagrams(word1, word2));
