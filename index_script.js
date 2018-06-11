console.log('hello world');

const menu = document.querySelector('.colorBar');

menu.addEventListener('click', function (event) {
    menu.classList.toggle('.activeColorBar')
})