const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let num = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      num += 1;
      results.push(num);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert'); 

assert.strictEqual(typeof removeVowels, 'function');
const output = removeVowels(parameter);
assert.strictEqual(output, result);

// console.log(removeVowels('Dayane'));