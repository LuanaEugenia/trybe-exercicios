import validator from 'validator';

const buttonValidation = document.getElementById('buttonValidation');

const validateEmail = (option, value) => option === 'email' && validator.isEmail(value);
const validateCpf = (option, value) => option === 'cpf' && validator.isTaxID(value, 'pt-BR');
const validateEmailOrCpf = (option, value) => validateEmail(option, value) || validateCpf(option, value);
 
buttonValidation.addEventListener('click', (event) => {
    event.preventDefault();
    const textElement = document.getElementById('texto');
    const option = document.getElementById('option');
    const message = document.getElementById('message');

    message.innerHTML = `A validação retornou ${validateEmailOrCpf(option.value, textElement.value)}`;
});

