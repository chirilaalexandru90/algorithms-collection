const vowelsCounter = require('./index-START');

test('vowelsCounter is a function', () => {
  expect(typeof regexVowelsCounter).toEqual('function');
});

test('returns the number of vowels found', () => {
  expect(regexVowelsCounter('aeiou')).toEqual(5);
});

test('returns the number of vowels found when string is capitalized', () => {
  expect(regexVowelsCounter('AEIOU')).toEqual(5);
});

test('returns the number of vowels found when all alphabets are passed in', () => {
  expect(regexVowelsCounter('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels found when string has mixed capitalization', () => {
  expect(regexVowelsCounter('Abcdegfizzjbhso')).toEqual(4);
});