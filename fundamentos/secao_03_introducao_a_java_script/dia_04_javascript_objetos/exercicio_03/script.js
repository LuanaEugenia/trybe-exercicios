student = {
    nome: 'Luana',
    email: 'luana.san2015.ls@gmail.com',
    telefone: 710988785236,
}

console.log(student);

let novaChave = 'GitHub';
let valorDaChave = 'https://github.com/LuanaEugenia'

function addInformacoes(objeto, chave, valor) {
    objeto[chave] = valor;
}

addInformacoes(student, novaChave, valorDaChave);
console.log(student);

novaChave = 'Linkedin';
valorDaChave = 'www.linkedin.com/in/luana-eugênia-2a336b1a8';

addInformacoes(student, novaChave, valorDaChave);
console.log(student);
