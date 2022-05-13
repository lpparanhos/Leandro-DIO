document.addEventListener('DOMContentLoaded', () => {
    // Tornar todos os "navbar-burger" elementos
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Adiciona "click event" em cada um deles
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Torna o target de "data-target" um atributo
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Alterna a classe "is-active" tanto no "navbar-burger" quanto no "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
});