const obterMaiorPalavra = (frase) => {
    const palavras = frase.split(' ');
    let maiorPalavra;

    for (let i = 0; i < palavras.length; i += 1) {
        const palavra = palavras[i];

        if (i === 0) {
            maiorPalavra = palavra;
        } else if (maiorPalavra.length < palavra.length) {
            maiorPalavra = palavra;
        }
    }

    return maiorPalavra;
}

const frase = 'Olá mundo pepsi twish ornintorrinco laringologista';
const maiorPalavra = obterMaiorPalavra(frase);
console.log(maiorPalavra);
