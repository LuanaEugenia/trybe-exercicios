function adicionarConteudo(id, conteudo) {
  const elemento = document.getElementById(id);
  elemento.innerText = conteudo;
}

function alterarBackground(id, cor) {
  const elemento = document.getElementById(id);
  elemento.style.backgroundColor = cor
}

adicionarConteudo('textP', 'Olá, eu me chamo Luana Eugênia, eeee Tô na Trybe!')
alterarBackground('main-content', 'rgb(76,164,109)');