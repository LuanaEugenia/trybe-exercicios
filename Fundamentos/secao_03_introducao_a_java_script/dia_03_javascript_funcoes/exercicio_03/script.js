let clientesTrybeBank = ['Ada', 'John', 'Gus'];



function clienteEncontrado() {
    let clienteEncontrado = false;

    if (clienteEncontrado === false) {
        return 'Cliente não encontrado'
    }
    else {
        return 'O parâmetro passado deve ser do tipo "string"!';
    }
    return clienteEncontrado;

}

function removeCliente(cliente) {
    if (typeof cliente === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'Cliente excluída(o) com sucesso.';
            }
        }
        let encontecliente = clienteEncontrado(cliente);
    }
};

removeCliente('Ada');

console.log(clientesTrybeBank);



/*Antes da refatoração
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrado'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};*/
