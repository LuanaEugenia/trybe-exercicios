const {sum} = require('./questao1');


describe('Questão 1', () => {
  test('retorna 9 quando funcionar', () => {
    const resultado  = sum(4, 5);

    expect(resultado).toBe(9);
  });

  test('retorna 0 quando funcionar', () => {
    const resultado = sum(0, 0);
    expect(resultado).toBe(0);
  });

  test('retorna erro quando os parâmetros não são do tipo numérico', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});