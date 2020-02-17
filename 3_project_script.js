var div = document.getElementsByClassName("galleryNav")[1];
var rect = div.getBoundingClientRect();
x = rect.left;
y = rect.top;
w = rect.width;
h = rect.height;
//alert("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);

//document.getElementsByClassName("contentScroll")[0].style.height = `${y}px`;




ScrollReveal({ reset: true });

var slideUp = {
    viewFactor: 0.5,
    opacity: 0,
    distance: '16px',
    orizin: 'bottom',
    duration: 600,
    easing: 'ease-out',
    delay: 200
};

var delayedSlideUp = {
    viewFactor: 0.5,
    opacity: 0,
    distance: '16px',
    origin: 'bottom',
    duration: 600,
    easing: 'ease-out',
    delay: 500
};

var fadeInSimple = {
    viewFactor: 0.35,
    opacity: 0,
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
    //viewOffset: {
    //    top: 700,
    //    bottom: 0
    //}
};

//ScrollReveal().reveal('.card :not(img)', slideUp);
// ScrollReveal().reveal('.card img', delayedSlideUp);
// ScrollReveal().reveal('.colorShift', fadeInSimple);

//var whiteRect = document.getElementsByClassName("contentScroll");
//whiteRect[0].classList.add("contentScrollPost");
//var theCSSprop = window.getComputedStyle(document.getElementById("test"), null).getPropertyValue("background-color");

function openGallery(pathname) {
    console.log("pathname: " + pathname);
    var fadeMe = document.getElementsByClassName("fadeMe");
    var textContainer = document.getElementsByClassName("flexText");
    var imgContainer = document.getElementsByClassName("cardImg");
    var fadeOut = [fadeMe, textContainer, imgContainer];

    if (pathname=='0') {
        var currentURL = window.location.href;
        var projNum = parseInt(currentURL.charAt(currentURL.length-6));
        pathname = 'project-' + (projNum+1) + '.html';
    }

    var dur = 0;
    var fade = function (arr) {
        if (arr.length > 1) {
            for (var i = 0; i < arr.length; i++) {
                fade(arr[i]);
            }
        }
        else {
            dur += 50;
            setTimeout(function () {
                arr.classList.add("inactiveInitial");
            }, dur);
        }
    }

    fade(fadeOut);



    console.log("pathname: " + pathname);
    setTimeout(function () {
        window.open(pathname, "_self");
        console.log("opening...");
    }, 2500);
}