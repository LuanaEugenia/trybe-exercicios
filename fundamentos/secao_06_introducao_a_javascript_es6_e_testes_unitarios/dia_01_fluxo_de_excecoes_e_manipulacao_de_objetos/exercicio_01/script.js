const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'MG',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const buildDestinataryPhrase = (pessoa) => {
  const destinatario = `Destinatário: ${pessoa.name}.`;
  const endereco = `Endereço: ${pessoa.address.street}, ${pessoa.address.number}, ${pessoa.address.neighborhood}, ${pessoa.address.city} - ${pessoa.address.state}. ${pessoa.address.cep}`;

  return `${destinatario} ${endereco}`;
}

const findPersonByName = (name) => {
  let pessoa;

  try {
    for (const client of clients) {
      if (client.name.includes(name)) {
        pessoa = client;
      }
    }

    if (!pessoa) {
      throw new Error('Pessoa não encontrada, tente novamente');
    }

    return buildDestinataryPhrase(pessoa);
  } catch (erro) {
    return erro.message;
  }
};

const findPersonByPosition = (position) => {
  let cliente;
  let email;

  try {
    for (let i = 0; i < clients.length; i += 1) {
      if (position === i) {
        cliente = clients[position].name;
        email = clients[position].email;
      }
    }
    
    if (position > clients.length) {
      throw new Error('Posição inválida, tente novamente');
    }

   return (`Cliente: ${cliente}. E-mail: ${email}`);
  } catch (erro) {
    return erro.message;
  }
}

const findPeopleByState = (state) => {
  let pessoasDoMesmoEstado = [];

  try {
    for (let i = 0; i < clients.length; i += 1) {
      if (state === clients[i].address.state) {
        pessoasDoMesmoEstado.push(clients[i].name);
      }  
    }

    if (!state) {
      throw new Error ('Ops, nenhuma pessoa mora nesse estado, tente outro');
    }

    return pessoasDoMesmoEstado;
  } catch (erro) {
    return erro.message
  }
};
