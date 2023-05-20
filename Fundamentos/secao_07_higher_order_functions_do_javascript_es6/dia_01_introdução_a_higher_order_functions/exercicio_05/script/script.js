const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((arryDenomes) => arryDenomes === name);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));