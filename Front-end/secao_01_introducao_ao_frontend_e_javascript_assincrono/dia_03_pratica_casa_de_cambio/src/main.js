import swal from 'sweetalert2';

const buttonPesquisa = document.querySelector('button');

buttonPesquisa.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`https://api.exchangerate.host/latest?base=${inputMoeda.value}`)
        .then((response) => response.json())
        .then((response) => {
            if (inputMoeda.value === '') throw new Error('Você presica passar uma moeda!');
            if (!Object.keys(response.rates).includes(inputMoeda.value)) throw new Error('Moeda não existente!');

            moedaMessage.innerHTML = `Valores referente a 1 ${inputMoeda.value}`;
            moedas.innerHTML = '';
            Object.entries(response.rates).forEach((entrie) => {
                const li = document.createElement('li');

                li.innerHTML = entrie[0];
                li.innerHTML += ' - ';
                li.innerHTML += entrie[1].toFixed(3);

                moedas.appendChild(li);
            });
        })
        .catch(error => swal.fire(error.message))
});

