const myRemove = require('../src/myRemove');

describe('Verifica função myRemove', () => {
    test('Verifica se ao passar a função myRemove([1, 2, 3, 4], 3) remove o numero 3.', () => {
        const funMyRemove = myRemove([1, 2, 3, 4], 3);
        expect(funMyRemove).toEqual([1, 2, 4]);
    });

    test('Verifica se ao passar a função myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4].', () => {
        const funMyRemove = myRemove([1, 2, 3, 4], 3);
        expect(funMyRemove).not.toEqual([1, 2, 3, 4]);
    });

    test('Verifica se ao passar a função myRemove([1, 2, 3, 4], 5) remove o numero 5.', () => {
        const funMyRemove = myRemove([1, 2, 3, 4], 5);
        expect(funMyRemove).toEqual([1, 2, 3, 4]);
    });
    
});

