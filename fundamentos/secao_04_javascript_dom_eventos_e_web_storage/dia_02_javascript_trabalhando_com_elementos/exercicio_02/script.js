// Crie um irmão para `elementoOndeVoceEsta`.
const elementoPai = document.getElementById('pai');
const novoElemento = document.createElement('section');
novoElemento.id = 'irmaoElementoOndeVoceEsta';
elementoPai.appendChild(novoElemento);

// Crie um filho para `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

