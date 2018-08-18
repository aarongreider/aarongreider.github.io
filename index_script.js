console.log('hello werlad');

var aboutExpanded = false;
var menuExpanded = false;
var galleryExpanded = false;
var slideshowExpanded = [false, false];
var about;
var menu;
var gallery;
var nameBar;
var viewport;
var figures;
var nav;
var slideshow;
var dropdownWindow;
var plusIcon;
var line;

var projectNum = 0;
var scrollerHeight = 0;


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
        subOption[i].innerHTML = `${i + 1}. ${titles[j].innerHTML}`;
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

    nameBar = document.getElementById("scrollContent");

    if (galleryExpanded) {
        nameBar.style.top = 0;
        galleryExpanded = false;
        // grayscale? 
    } else {
        nameBar.style.top = "20em";
        galleryExpanded = true;
    }

    checkToggled();
}

function selectProject(num) {
    // called to shift the gallery to display a specific project num
    // will collapse menu and about
    console.log("selectProject()");

    gallery = document.getElementById("gallery");
    viewport = document.getElementById("viewport");

    switch (num) {
        case 1:
            gallery.style.left = "0";
            viewport.style.background = `url("Graphics/body_mantle_cover.jpg") center/cover no-repeat fixed`;
            break;
        case 2:
            gallery.style.left = "-100vw";
            viewport.style.background = `url("Graphics/Patch_title.jpg") center/cover no-repeat fixed`;
            break;
        case 3:
            gallery.style.left = "-200vw";
            viewport.style.background = `url("Graphics/POSTER/Poster_studies_cover.png") center/cover no-repeat fixed`;
            break;
        case 4:
            gallery.style.left = "-300vw";
            viewport.style.background = `url("Graphics/digital_3D/shampoo-1.jpg") center/cover no-repeat fixed`;
            break;
        case 5:
            gallery.style.left = "-400vw";
            viewport.style.background = `url("Graphics/body_mantle_cover.jpg") center/cover no-repeat fixed`;
            break;
        case 6:
            gallery.style.left = "-500vw";
            viewport.style.background = `url("Graphics/BRODY/brody-1.jpg") center/cover no-repeat fixed`;
            break;
        case 7:
            gallery.style.left = "-600vw";
            viewport.style.background = `url("Graphics/body_mantle_cover.jpg") center/cover no-repeat fixed`;
            break;
        case 8:
            gallery.style.left = "-700vw";
            viewport.style.background = `url("Graphics/body_mantle_cover.jpg") center/cover no-repeat fixed`;
            break;
    }

    projectNum = num;
    checkToggled();
}


function dropdownSlideshow(num) {
    dropdownWindow = document.getElementsByClassName("dropdownContent");
    slideshow = document.getElementsByClassName("slideshow");
    plusIcon = document.getElementsByClassName("plusLines");
    line = document.getElementsByClassName("photoLine");

    if (!slideshowExpanded[num]) {
        // add class to hr to extend line width 
        // wait
        line[num].classList.add("photoLineJSActivated");
        window.setTimeout(function func() {
            dropdownWindow[num].style.height = "36em";
            slideshow[num].style.top = "0em";
            plusIcon[num].classList.add("plusLinesJSActivated");
            slideshowExpanded[num] = true;
        }, 150);
    } else {
        line[num].classList.remove("photoLineJSActivated");
        window.setTimeout(function func() {
            dropdownWindow[num].style.height = "0";
            slideshow[num].style.top = "-34em";
            plusIcon[num].classList.remove("plusLinesJSActivated");
            slideshowExpanded[num] = false;
        }, 150);
    }
}


window.addEventListener('wheel', function (e) {
    // listens for wheel event, changes the projectNum and calls selectProject(num)
    nameBar = document.getElementsByClassName("nameBar");
    console.log(`e.deltaY: ${e.deltaY}`)
    if (e.deltaY > 0) {
        nameBar[0].style.top = "-5vh";
        console.log("scrolling down");
    } else if (e.deltaY < 0) {
        nameBar[0].style.top = "5vh";
        console.log("scrolling up");
    }
});
