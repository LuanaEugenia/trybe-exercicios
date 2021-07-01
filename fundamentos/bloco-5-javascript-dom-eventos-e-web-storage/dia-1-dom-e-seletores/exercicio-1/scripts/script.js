function adicionarConteudo(id, conteudo) {
  const elemento = document.getElementById(id);
  elemento.innerText = conteudo;
}

function alterarBackground(id, cor) {
  const elemento = document.getElementById(id);
  elemento.style.backgroundColor = cor
}

function alterarLetrasParaMaiusculas(tag) {
  const elementos = document.getElementsByTagName(tag);

  for (let i = 0; i < elementos.length; i += 1) {
    elementos[i].style.textTransform = 'uppercase';
  }
}

function mostrarConteudoNoConsle(tag) {
  const elementos = document.getElementsByTagName(tag);

  for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].innerHTML);
  }
}


adicionarConteudo('textP', 'Olá, eu me chamo Luana Eugênia, eeee Tô na Trybe!')
alterarBackground('main-content', 'rgb(76,164,109)');
alterarBackground('center-content', '#ffffff');
adicionarConteudo('title', 'Exercício 5.1 - Javascript');
alterarLetrasParaMaiusculas('p');
mostrarConteudoNoConsle('p');