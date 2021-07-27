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

adicionarTurnoLesson2(lesson2, 'turno', 'matutino');
listarKeys(lesson2);
mostrarTamanhoObjeto(lesson2);
