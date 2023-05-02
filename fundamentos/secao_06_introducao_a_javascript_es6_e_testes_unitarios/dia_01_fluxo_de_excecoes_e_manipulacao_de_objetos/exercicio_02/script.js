const studentRegister = (name, age) => {
  try {
    if (typeof name === 'string' && age > 18) {
      return (`${name}, seja bem-vindo(a) à AuTrybe!`);
    }

    if (!name || !age) {
      throw new Error ('Todas as informações são necessárias!')
    }

    if (age < 18) {
      throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }

  } catch (erro) {
    return erro.message
  }
  };

