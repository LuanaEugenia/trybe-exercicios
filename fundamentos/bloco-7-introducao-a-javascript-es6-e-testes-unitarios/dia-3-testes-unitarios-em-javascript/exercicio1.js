const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

let response = sum(4, 5);
assert.strictEqual(response, 9, '4 + 5 = 9');

response = sum(0, 0);
assert.strictEqual(response, 0, '0 + 0 = 0');

assert.throws(() => sum(4, '5'), /Error: parameters must be numbers$/);
