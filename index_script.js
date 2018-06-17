console.log('hello whurled');

var aboutExpanded = false;
var menuExpanded = false;
var galleryExpanded = false;
var about;
var menu;
var gallery;
var figure;


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

    if (galleryExpanded) {
        gallery.style.left = "0";
        galleryExpanded = false;
        figure.style.filter = "grayscale(100%)"
    } else {
        gallery.style.left = "-40vw";
        galleryExpanded = true;
        figure.style.filter = "grayscale(0%)"
    }

    if (menuExpanded) {
        toggleMenu();
    } else if (aboutExpanded) {
        toggleAbout();
    }
}