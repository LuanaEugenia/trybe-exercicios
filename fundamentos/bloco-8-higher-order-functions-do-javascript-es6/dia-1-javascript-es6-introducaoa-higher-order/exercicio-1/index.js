const criarFuncionario = (nomeCompleto) => {
  return {
    nomeCompleto,
    email: `${nomeCompleto}@trybe.com`,
  };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }

  return employees;
};

const employees = newEmployees(criarFuncionario);
console.log(employees);
