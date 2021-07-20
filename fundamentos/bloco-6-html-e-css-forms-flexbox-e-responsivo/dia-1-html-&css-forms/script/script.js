const estados = [
  { codigo: 'AC', nome: 'Acre' },
  { codigo: 'AL', nome: 'Alagoas' },
  { codigo: 'AP', nome: 'Amapá' },
  { codigo: 'AM', nome: 'Amazonas' },
  { codigo: 'BA', nome: 'Bahia' },
  { codigo: 'CE', nome: 'Ceará' },
  { codigo: 'DF', nome: 'Distrito Federal' },
  { codigo: 'ES', nome: 'Espírito Santo' },
  { codigo: 'GO', nome: 'Goías' },
  { codigo: 'MA', nome: 'Maranhão' },
  { codigo: 'MT', nome: 'Mato Grosso' },
  { codigo: 'MS', nome: 'Mato Grosso do Sul' },
  { codigo: 'MG', nome: 'Minas Gerais' },
  { codigo: 'PA', nome: 'Pará' },
  { codigo: 'PB', nome: 'Paraíba' },
  { codigo: 'PR', nome: 'Paraná' },
  { codigo: 'PE', nome: 'Pernambuco' },
  { codigo: 'PI', nome: 'Piauí' },
  { codigo: 'RJ', nome: 'Rio de Janeiro' },
  { codigo: 'RN', nome: 'Rio Grande do Norte' },
  { codigo: 'RS', nome: 'Rio Grande do Sul' },
  { codigo: 'RO', nome: 'Rondônia' },
  { codigo: 'RR', nome: 'Roraíma' },
  { codigo: 'SC', nome: 'Santa Catarina' },
  { codigo: 'SP', nome: 'São Paulo' },
  { codigo: 'SE', nome: 'Sergipe' },
  { codigo: 'TO', nome: 'Tocantins' },
];

function adicionarEstados() {
  const select = document.getElementById('estados');

  for (let i = 0; i < estados.length; i += 1) {
    const estado = estados[i];
    const option = document.createElement('option');

    option.value = estado.codigo;
    option.innerHTML = estado.nome;
    select.appendChild(option);
  }
}

function dateValidation(input, name) {
  if (input.value.length === 0) {
    return {
      message: 'A data não foi preenchida!'
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;

  if (!regex.test(input.value)) {
    return {
      message: 'Data: Formato inválido'
    };
  }

  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if (day < 0 || day > 30) {
    return {
      message: 'Dia inválido'
    };
  }

  if (month < 0 || month > 12) {
    return {
      message: 'Mês inválido'
    }
  }

  if (year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

document.getElementById('buttonPrevent').addEventListener('click', function (event) {
  event.preventDefault()
});

adicionarEstados();
