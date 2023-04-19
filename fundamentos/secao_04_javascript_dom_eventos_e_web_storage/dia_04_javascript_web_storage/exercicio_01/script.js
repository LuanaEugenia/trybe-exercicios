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
}