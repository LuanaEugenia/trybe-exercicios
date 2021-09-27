const {obj1, obj2, obj3} = require('../questao5');

describe('Parte 1 - Questão 5', () => {
  test('comparando se o objeto 1 é igual ao objeto 2', () => {
    const resultado  = obj1;

    expect(resultado).toEqual(obj2);
  });

  test('comparando se o objeto 1 é diferente do objeto 3', () => {
    const resultado  = obj1;

    expect(resultado).not.toEqual(obj3);
  });

  test('comparando se o objeto 2 é igual ao objeto 3', () => {
    const resultado  = obj2;

    expect(resultado).not.toEqual(obj3);
  });

});