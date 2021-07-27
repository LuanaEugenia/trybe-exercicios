const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {};

const adicionarTurnoLesson2 = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

const listarKeys = (objeto) => {
  return Object.keys(objeto);
}

const mostrarTamanhoObjeto = (objeto) => {
  const chaves = Object.keys(objeto);
  console.log(chaves.length);
}

const listarValoresObjeto = (objeto) => {
  return Object.values(objeto)
}

const agruparAulas = () => {
  Object.assign(allLessons, { lesson1 }, { lesson2 }, { lesson3 });
  console.table(allLessons);
}

const obterQuantidadeDeAlunos = (objeto) => {
  let quantidadeAlunos = 0;

  for (const chave in objeto) {
    if (Object.hasOwnProperty.call(objeto, chave)) {
      const lesson = objeto[chave];
      quantidadeAlunos += lesson.numeroEstudantes;
    }
  }

  return quantidadeAlunos;
}

const obterValorObjetoPosicao = (objeto, valorChave) => {
  const valores = Object.values(objeto);
  return valores[valorChave];
}

adicionarTurnoLesson2(lesson2, 'turno', 'matutino');
console.log(lesson2);
console.log(listarKeys(lesson2));
mostrarTamanhoObjeto(lesson2);
console.log(listarValoresObjeto(lesson2));
agruparAulas();
const quantidadeAlunos = obterQuantidadeDeAlunos(allLessons);
console.log(`A quantidade de aluno é ${quantidadeAlunos}.`);
console.log(obterValorObjetoPosicao(lesson1, 0));