let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

console.log('Bem-vinda, ' + info.personagem + '!');
console.log('***************************************');

let novaChave = 'recorrente';
let valorChave = 'sim';

/*Chamada da função
addInfo(info, novaChave, valorChave);

//Função para adicionar um novo valor e uma nova chave ao objeto
function addInfo(objeto, chave, valor) {
    objeto[chave] = valor;
}

//Todas as chaves do objeto
for (let key in info) {
    console.log(key);
}

console.log('***************************************');


//Todos os valores das propriedades do objeto
for (let key in info) {
    console.log(info[key]);
}*/


for (let key in info) {
    if ( key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim') {
        console.log('Ambos Recorrente');
    } else {
        console.log(info[key] + ' e ' +info2[key]);
    }
}
