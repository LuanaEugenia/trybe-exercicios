const buttonMenu = document.getElementById('button-menu');

function mostrarMenu() {
    const menu = document.getElementById('menu');

    if (!menu.classList.contains('show')){
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
    }
}

buttonMenu.addEventListener('click', mostrarMenu);