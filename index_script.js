console.log('hello wohald');

var aboutExpanded = false;
var menuExpanded = false;
var about;
var menu;


function openAbout() {
    about = document.getElementById("colorBar");
    if (aboutExpanded) {
        about.style.height = "3vh";
        aboutExpanded = false;
    } else {
        about.style.height = "100vh";
        aboutExpanded = true;

        if (menuExpanded) {
            openMenu();
        }
    }
}

function openMenu() {
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
            openAbout();
        }
    }
}