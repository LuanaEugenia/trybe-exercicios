let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
};

console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'Ambos recorrentes'

console.table(info)

for (let value in info) {
  console.log(value)
}

console.log('\n')

for(let value in info) {
  console.log(info[value])
}

console.log('\n')


console.log(info.personagem + info2.personagem)
console.log(info.origem + info2.origem)
console.log(info.nota + ' e ' + info2.nota)
console.log(info['recorrente'])

console.table(info)
