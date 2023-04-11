const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
//Serve para fazer com que o menu ou os li apareçam quando a tela estiver abaixo de 785px e clicamos nas três barras que simbolozam o menu//
menu.addEventListener('click', () => {
    menu.classList.toggle('activo');
    NavMenu.classList.toggle('activo');
});
