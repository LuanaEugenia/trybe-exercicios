const verificaNumeros = (numeroSortedo, meuNumero) => numeroSortedo === meuNumero;

const sorteio = (meuNumero, callback) => {
    const numeroSortedo = Math.floor(Math.random() * 5 + 1);

    return callback(meuNumero, numeroSortedo) ? "Tente novamente" : "Parabéns, você ganhou";
};

console.log(sorteio(2, verificaNumeros));