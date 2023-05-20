let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addPessoas(nomePessoa, array) {
    if (!(typeof nomePessoa === 'string' || nomePessoa instanceof String)) {
        console.log('Não aceitamos números, apenas strings');
    } else {
        array.push(nomePessoa);
    }
}

addPessoas('Luana', clientesTrybeBank);
console.log(clientesTrybeBank);

addPessoas(0, clientesTrybeBank);
console.log(clientesTrybeBank);
