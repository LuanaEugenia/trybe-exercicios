function adicionarConteudo(id, conteudo) {
  const elemento = document.getElementById(id);
  elemento.innerText = conteudo;
}

adicionarConteudo('textP', 'Olá, eu me chamo Luana Eugênia, eeee Tô na Trybe!');