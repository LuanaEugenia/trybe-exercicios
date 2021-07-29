const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const obterResultado = (gabarito, respostasDaPessoaEstudante) => {
  let pontuacaoFinal = 0;

  for (let i = 0; i < gabarito.length; i += 1) {
    const respostaGabarito = gabarito[i];
    const respostaEstudante = respostasDaPessoaEstudante[i];

    if (respostaEstudante === 'N.A') {
      continue;
    }

    if (respostaGabarito === respostaEstudante) {
      pontuacaoFinal += 1;
    } else if (respostaGabarito !== respostaEstudante) {
      pontuacaoFinal += 0.5;
    }
  }

  return pontuacaoFinal;
};

const avaliador = (gabarito, respostasDaPessoaEstudante, callback) =>
  callback(gabarito, respostasDaPessoaEstudante);

const pontuacaoFinal = avaliador(RIGHT_ANSWERS, STUDENT_ANSWERS, obterResultado);
console.log(pontuacaoFinal);
