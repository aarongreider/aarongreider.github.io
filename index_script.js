console.log('hello whurled');

var aboutExpanded = false;
var menuExpanded = false;
var galleryExpanded = false;
var about;
var menu;
var gallery;
var figure;
var nav;

var projectNum = 0;


function toggleAbout() {
    about = document.getElementById("colorBar");
    if (aboutExpanded) {
        about.style.height = "3vh";
        aboutExpanded = false;
    } else {
        about.style.height = "100vh";
        aboutExpanded = true;

        if (menuExpanded) {
            toggleMenu();
        }
    }
}

function toggleMenu() {
    menu = document.getElementById("colorBar2");
    if (menuExpanded) {
        menu.style.height = "3vh";
        menu.style.top = "97vh";
        menuExpanded = false;
    } else {
        menu.style.height = "100vh";
        menu.style.top = "0";
        menuExpanded = true;

        if (aboutExpanded) {
            toggleAbout();
        }
    }
}

function expandProject() {
    gallery = document.getElementById("gallery");
    figure = document.getElementById("figure1");
    nav = document.getElementById("navContent1");

    if (galleryExpanded) {
        gallery.style.left = "0";
        nav.style.left = "0";
        galleryExpanded = false;
        figure.style.filter = "grayscale(100%)"
    } else {
        gallery.style.left = "-40vw";
        nav.style.left = "-40.8vw";
        galleryExpanded = true;
        figure.style.filter = "grayscale(0%)"
    }

    if (menuExpanded) {
        toggleMenu();
    } else if (aboutExpanded) {
        toggleAbout();
    }
}



window.addEventListener('wheel', function (e) {
    gallery = document.getElementById("gallery");
    
    if (e.deltaY > 0) {
        gallery.style.top = "-68vh";
        projectNum = 1;
    }
    else if (e.deltaY < 0) {
        gallery.style.top = "0";
        projectNum = 0;
    }
});