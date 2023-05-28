import swal from 'sweetalert2';

const TOKEN = '3583322488557905';

sortear.addEventListener('click', () => {
    const numeroSorteado = Math.floor(Math.random() * 1000);

    fetch(`https://superheroapi.com/api.php/${TOKEN}/${numeroSorteado}`)
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                swal.fire(response.error);
            } else {
                const hero = response;
                heroImage.src = hero.image.url;
                heroName.innerHTML = hero.name;
            }
        });
});

sortear.click();