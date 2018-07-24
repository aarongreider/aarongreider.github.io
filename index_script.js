console.log('hello werlad');

var aboutExpanded = false;
var menuExpanded = false;
var galleryExpanded = false;
var about;
var menu;
var gallery;
var figures;
var nav;

var projectNum = 0;


function populateSubOption() {
    console.log("populateSubOption()");
    var subOption = document.getElementsByClassName("subMenuOption");
    var titles = document.getElementsByClassName("title");
    console.log(`   subOption.length: ${subOption.length}`)
    console.log(`   titles.length: ${titles.length}`)
    var j = 0;
    for (var i = 0; i < subOption.length; i++) {
        // use .innerHTML to populate the subOptions under menu/WORK with the proper prject name
        // iterates title selector by 2 ticks to grab the correct project name, skipping 
        // the expanded project title (also denoted by the 'title' classname)
        console.log(`       iterating; subOption ${i} = ${titles[j].innerHTML}`)
        subOption[i].innerHTML = `${i+1}. ${titles[j].innerHTML}`;
        j += 2;
    }
}

function toggleAbout() {
    console.log("toggleAbout()");

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
    console.log("toggleMenu()");

    populateSubOption();
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
    // when an action happens, check if either the about or the menu are open, and collapse them
    console.log("checkToggled()");

    if (menuExpanded) {
        toggleMenu();
    } else if (aboutExpanded) {
        toggleAbout();
    }
}

function expandProject() {
    // shifts gallery over to display the process work and extended description
    // collapses about and menu, removes greyscale filter of title image
    console.log("expandProject()");

    gallery = document.getElementById("gallery");
    figures = document.getElementsByClassName("titleFigure");
    for (var i = 0; i < figures.length; i++) {
        console.log(`figure ${i}: found`);
    }
    nav = document.getElementById("navContent1");

    if (galleryExpanded) {
        gallery.style.left = "0";
        nav.style.left = "0";
        galleryExpanded = false;
        for (var i = 0; i < figures.length; i++) {
            figures[i].style.filter = "grayscale(100%)";
        }
    } else {
        gallery.style.left = "-40vw";
        nav.style.left = "-40.8vw";
        galleryExpanded = true;
        for (var i = 0; i < figures.length; i++) {
            figures[i].style.filter = "grayscale(0%)";
        }
    }

    checkToggled();
}

function selectProject(num) {
    // called to shift the gallery to display a specific project num
    // will collapse menu and about
    console.log("selectProject()");

    gallery = document.getElementById("gallery");

    switch (num) {
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

    projectNum = num;
    checkToggled();
}

window.addEventListener('wheel', function (e) {
    // listens for wheel event, changes the projectNum and calls selectProject(num)
    gallery = document.getElementById("gallery");

    if (e.deltaY > 0 && !galleryExpanded && projectNum != 8) {
        projectNum += 1;
        selectProject(projectNum);

        console.log("scrolling down; projectNum: " + projectNum);

    } else if (e.deltaY < 0 && !galleryExpanded && projectNum != 1) {
        projectNum -= 1;
        selectProject(projectNum);

        console.log("scrolling down; projectNum: " + projectNum);
    }
});