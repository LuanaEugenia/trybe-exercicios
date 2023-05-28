getRandomDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((response) => imageAnimal.src = response.message);
});

getRandomCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => response.json())
        .then((response) => imageAnimal.src = response[0].url);
});

surprise.addEventListener('click', () => {
    Promise.any([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://api.thecatapi.com/v1/images/search')
    ])
    .then((response) => response.json())
    .then((response) => {
        if (response.message) {
            imageAnimal.src = response.message
        } else {
            imageAnimal.src = response[0].url
        }
    })
});