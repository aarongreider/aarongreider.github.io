console.log('hello Aaren');

// const menu = document.querySelector('.colorBar');

// menu.addEventListener('click', function (event) {
//    menu.classList.toggle('.activeColorBar')
//})

$(document).ready(function () {
    $(".colorBar").click(function () {
        $("p").css("color", "red");
    });
});