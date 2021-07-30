const verificaSeSaoIguais = (n1, n2) => n1 === n2;

const geradorNumerosAleatorios = (numeroApostado, callback) => {
  const numeroSorteado = Math.floor(Math.random() * 5 + 1);
  const saoIguais = callback(numeroApostado, numeroSorteado);

  if (saoIguais) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};

const resposta = geradorNumerosAleatorios(3, verificaSeSaoIguais);
console.log(resposta);
