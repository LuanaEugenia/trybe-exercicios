let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' +info.personagem+ '!');
  console.log('***************************************');

  let novaChave = 'recorrente';
  let valorChave = 'sim';

  addInfo(info, novaChave, valorChave);

  function addInfo(objeto, chave, valor) {
    objeto[chave] = valor;
  }

  for(let i in info) {
    console.log(i);
  }