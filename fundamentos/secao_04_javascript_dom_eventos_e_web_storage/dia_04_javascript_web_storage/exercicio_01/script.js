window.onload = () => {
  // Cor de fundo da tela;
  const setColorBackgound = (color) => {
    const content = document.querySelector('.content');
    content.style.backgroundColor = color;
  }
  // Cor do texto;
  const setColorText = (color) => {
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.color = color;
  }
  // Tamanho da fonte;
  const setFontSize = (size) => {
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.fontSize = size;
  }
  // Espaçamento entre as linhas do texto;
  const setLineHeight = (lineHeight) => {
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.lineHeight = lineHeight;
  }
  // Tipo da fonte (Font family).
  const setFontFamily = (fontFamily) => {
    const paragraph = document.querySelector('.paragraph');
    paragraph.style.fontFamily = fontFamily;
  }

  const buttonBackground = document.getElementById('background-color');
  buttonBackground.addEventListener('click', (event) => {
    setColorBackgound(event.target.innerText);
  })

  const buttonColor = document.getElementById('font-color');
  buttonColor.addEventListener('click', (event) => {
    setColorText(event.target.innerText);
  })

  const buttonFontSize = document.getElementById('font-size');
  buttonFontSize.addEventListener('click', (event) => {
    setFontSize(event.target.innerText);
  })

  const buttonLineHeight = document.getElementById('line-height');
  buttonLineHeight.addEventListener('click', (event) => {
    setLineHeight(event.target.innerText);
  })
}