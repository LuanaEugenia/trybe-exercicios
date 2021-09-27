const {myFizzBuzz} = require('../questao4');

describe('Parte 1 - Questão 4', () => {
  test('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 ', () => {
    const resultado  = myFizzBuzz(15);

    expect(resultado).toBe('fizzbuzz');
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    const resultado  = myFizzBuzz(9);

    expect(resultado).toBe('fizz');
  });

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    const resultado  = myFizzBuzz(25);

    expect(resultado).toBe('buzz');
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    const resultado  = myFizzBuzz(11);

    expect(resultado).toBe(11);
  });

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    const resultado  = myFizzBuzz('25');

    expect(resultado).not.toBeTruthy();
  });
});