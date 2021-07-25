const buttonClicaAqui = document.getElementById('button');
let clickCount = 0;

const obterQuantidadeDeClicks = () => {
  clickCount++;
  document.getElementById("resultado").innerHTML = clickCount;
}

buttonClicaAqui.addEventListener('click', obterQuantidadeDeClicks);
