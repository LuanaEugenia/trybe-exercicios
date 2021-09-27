const {encode, decode} = require('../questao1');

describe('Parte 2 - Questão 1', () => {
  test('Teste se encode e decode são funções', ()=> {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
});
