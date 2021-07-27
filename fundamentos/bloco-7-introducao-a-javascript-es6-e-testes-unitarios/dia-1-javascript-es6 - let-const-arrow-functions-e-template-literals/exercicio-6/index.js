const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Pyton'];

function cumprimentar(nome) {
  const frase = 'Tryber, x aqui!';
  
  return frase.replace('x', nome);
}

function adicionarSkillsAFrase(frase) {
  let novaFrase = `${frase} Minhas cinco principais habilidades são:`;
  skills.sort();

  for (const skill of skills) {
    novaFrase += `\n${skill}`;
  }

  return novaFrase;
}

const frase = cumprimentar('Bebeto');
const novaFrase = adicionarSkillsAFrase(frase);
console.log(novaFrase);