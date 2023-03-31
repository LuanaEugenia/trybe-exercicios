let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function delCliente(nome, array = []) {
    if (!(typeof nome === 'string' || nome instanceof String)) {
        console.log('Não é um string!');
    } else if (!(array.includes(nome))) {
        console.log('Esse nome não existe na lista!');
    } else {
        array.splice(array.indexOf(nome), 1);
    }
}

delCliente('Ada', clientesTrybeBank);

delCliente('Luana', clientesTrybeBank);

delCliente(0, clientesTrybeBank);


console.log(clientesTrybeBank);