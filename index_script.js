console.log('hello world');

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
var nextProjectButton;
var scrollClipRect;

var projectNum = 0;
var scrollerHeight = 0;
var pictureNum = [0, 0];

/* window.onload = function setGroundandScrollClip() {
    viewport = document.getElementById("viewport");
    viewport.style.background = `url("Graphics/MANTLE/mantle-11.jpg") center/cover no-repeat fixed`;
    setScrollClip(true);
}; */

window.onload = function populateSubOption() {
    selectProject(1);

    console.log("populateSubOption()");
    var subOption = document.getElementsByClassName("navProjectTitle");
    var titles = document.getElementsByClassName("title");
    console.log(`   subOption.length: ${subOption.length}`)
    console.log(`   titles.length: ${titles.length}`)

    nextProjectButton = document.getElementsByClassName("nextProject");

    var j = 0;
    for (var i = 0; i < subOption.length; i++) {
        // use .innerHTML to populate the subOptions under menu/WORK with the proper prject name
        // iterates title selector by 2 ticks to grab the correct project name, skipping  *******
        // the expanded project title (also denoted by the 'title' classname)
        // added later: populate the Next Project: (x) at the bottom of each project
        // added later: populate new menu instead of old menu
        console.log(`       iterating; subOption ${i} = ${titles[j].innerHTML}`)
        subOption[i].innerHTML = `${titles[j].innerHTML}`;
        if (i === 0) {
            console.log(`       i=0; index of nextProjectButton Population: ${nextProjectButton.length - 1}`);
            nextProjectButton[nextProjectButton.length - 1].innerHTML = `Next Project: ${titles[j].innerHTML}`
        } else {
            console.log(`       i!=0; index of nextProjectButton Population: ${i - 1}`);
            nextProjectButton[i - 1].innerHTML = `Next Project: ${titles[j].innerHTML}`
        }
        //j += 2;
        j += 1;
    }
};

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

function incrementProject() {
    projectNum++;
    selectProject(projectNum);
}

function selectProject(num) {
    // called to shift the gallery to display a specific project num
    // will collapse menu and about
    console.log("selectProject()");
    //window.scrollTo(0, 0);

    gallery = document.getElementById("gallery");
    viewport = document.getElementById("viewport");
    switch (num) {
        case 1:
            gallery.style.left = "0";
            viewport.style.background = `url("Graphics/MANTLE/mantle-11.jpg") center/cover no-repeat fixed`;
            break;
        case 2:
            gallery.style.left = "-100vw";
            viewport.style.background = `url("Graphics/PATCH/Patch_title.jpg") center/cover no-repeat fixed`;
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
            viewport.style.background = `url("Graphics/PHOTOGRAPHY/abstract/leaf-this-path.jpg") center/cover no-repeat fixed`;
            break;
        case 6:
            gallery.style.left = "-500vw";
            viewport.style.background = `url("Graphics/BRODY/brody-1.jpg") center/cover no-repeat fixed`;
            break;
        case 7:
            gallery.style.left = "-600vw";
            viewport.style.background = `url("Graphics/RAZOR/razor-1-1.jpg") center/cover no-repeat fixed`;
            break;
        case 8:
            gallery.style.left = "-700vw";
            viewport.style.background = `url("Graphics/jabberwock-1.jpg") center/cover no-repeat fixed`;
            break;
    }

    projectNum = num;
    setScrollClip(true);
    checkToggled();
}


function setScrollClip(scrollAction) {
    // calculate distance between top and bottom of a project (via a node placed at both ends)
    // set the height of id scrollClip with overflow:hidden to inhibit scrolling
    console.log(`setScrollClip()`);
    nextProjectButton = document.getElementsByClassName("nextProject");
    scrollClipRect = document.getElementById("scrollClip");

    // calculate
    var scrollClipCoords = scrollClipRect.getBoundingClientRect();
    var nextCoords = nextProjectButton[projectNum - 1].getBoundingClientRect();
    var difference = nextCoords.bottom - scrollClipCoords.top;

    // set height
    console.log(`   ${nextCoords.bottom} - ${scrollClipCoords.top} = ${difference}`);
    scrollClipRect.style.height = `${difference + 100}px`;
    console.log(`scrollClipRect.style.height = ${scrollClipRect.style.height}`)

    // scroll to top
    if (scrollAction) {
        window.setTimeout(function func() {
            scrollClipRect.scrollIntoView();
        }, 1);
    }
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
    window.setTimeout(function func() {
        setScrollClip(false);
    }, 600);
}

function incrementSlide(showNum, direction) {
    var slideshow = document.getElementsByClassName("slideshow");
    if (direction === 0 && pictureNum[showNum] > 0) {
        pictureNum[showNum] -= 1;
        console.log(`slide left: ${(-100 * pictureNum[showNum])}%`);

    } else if (direction === 1 && pictureNum[showNum] < 4) {
        pictureNum[showNum] += 1;
        console.log(`slide right: ${-100 * pictureNum[showNum]}%`);
    }
    slideshow[showNum].style.left = `${(-100 * pictureNum[showNum])}%`;
    console.log(`pictureNum[0]: ${pictureNum[showNum]}`);
}


/* 
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
*/