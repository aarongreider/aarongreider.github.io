console.log('hello werlad');

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

function checkToggled() {
    if (menuExpanded) {
        toggleMenu();
    } else if (aboutExpanded) {
        toggleAbout();
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
        figure.style.filter = "grayscale(100%)";
    } else {
        gallery.style.left = "-40vw";
        nav.style.left = "-40.8vw";
        galleryExpanded = true;
        figure.style.filter = "grayscale(0%)";
    }

    checkToggled();
}

function selectProject(circleNum) {
    gallery = document.getElementById("gallery");
    
    switch(circleNum) {
        case 1: 
            gallery.style.top = "0";
            break;
        case 2:
            gallery.style.top = "-68vh";
            break;
        case 3:
            gallery.style.top = "-136vh";
            break;
        case 4:
            gallery.style.top = "-204vh";
            break;
        case 5:
            gallery.style.top = "-272vh";
            break;
        case 6:
            gallery.style.top = "-340vh";
            break;
        case 7:
            gallery.style.top = "-408vh";
            break;
        case 8:
            gallery.style.top = "-476vh";
            break;
    }

    projectNum = circleNum;
    checkToggled();
}

window.addEventListener('wheel', function (e) {
    gallery = document.getElementById("gallery");

    //console.log("listener, e.deltaY: " + e.deltaY
    //    + ", galleryExpanded: " + galleryExpanded
    //    + ", gallery " + gallery);

    if (e.deltaY > 0 && !galleryExpanded) {
        gallery.style.top = "-68vh";
        projectNum = 2;
    }
    else if (e.deltaY < 0  && !galleryExpanded) {
        gallery.style.top = "0";
        projectNum = 1;
    }
});