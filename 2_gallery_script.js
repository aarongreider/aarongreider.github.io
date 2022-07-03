

// Get the user-agent string 
let userAgentString =
    navigator.userAgent;
// Detect Chrome 
let chromeAgent =
    userAgentString.indexOf("Chrome") > -1;

if (chromeAgent) {
    console.log("chrome!");
} else {
    console.log("not chrome :/");
    var popUp = document.getElementsByClassName("heyThere");
    popUp[0].classList.add("show")
}
function dismiss() {
    popUp[0].classList.remove("show");
    //document.body.classList.add("lockScrolling")
}


ScrollReveal({ reset: false });

var slideUp = {
    viewFactor: 0.1,
    opacity: 0,
    distance: '16px',
    origin: 'bottom',
    duration: 600,
    easing: 'ease-out',
    //delay: 250,
    interval: 100
};

var delayedSlideUp = {
    viewFactor: 0.35,
    opacity: 0,
    distance: '16px',
    origin: 'bottom',
    duration: 600,
    easing: 'ease-out',
    delay: 250,
    interval: 300
};
var fadeInLong = {
    viewFactor: 0.25,
    opacity: 0,
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
};

ScrollReveal().reveal('.colorShift', fadeInLong);
ScrollReveal().reveal('.card :not(img)', slideUp);
ScrollReveal().reveal('.card img', delayedSlideUp,);
ScrollReveal().reveal('.section-2 p, h2, h4', delayedSlideUp);
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
var slideImage = document.getElementsByClassName("gallerySlide");
var slideText = document.getElementsByClassName("galleryText");
var slideTextChilds;
var activeIndex = 0;
var animating = false;
var menuOpen = false;

var active;
var next;

var duration = 1000;

console.log("activeIndex= " + activeIndex);
console.log("slideImage.length= " + slideImage.length);

// RIGHT BUTTON PRESS
btnRight.addEventListener('click', function () {
    console.log("right button press");
    // right button next is x+1
    if (activeIndex == slideImage.length - 1 || animating == true) {
        console.log("cannot increment")
    } else {
        active = slideImage[activeIndex];
        next = slideImage[activeIndex + 1];

        // set id's
        active.id = "top";
        next.id = "next";

        //TEXT DISAPPEAR
        //TEXT DISAPPEAR
        //TEXT DISAPPEAR
        slideText[activeIndex].classList.add("inactiveInitial");

        slideTextChilds = slideText[activeIndex].querySelectorAll("*");        
        slideTextChilds.forEach(function(item, index) {
            slideTextChilds[index].classList.add("inactiveFinal");
        })
             
             
        //assign .animate class to animate the shifted clip path then hide active
        console.log("animating");
        active.classList.add("animateClipPath");

        //wait duration then return active image to and remove .animate class
        animating = true;
        window.setTimeout(function () {
            waitRemove("up");
        }, duration);
    }
})

// LEFT BUTTON PRESS
btnLeft.addEventListener('click', function () {
    console.log("left button press");
    // left button next is x-1
    if (activeIndex == 0 || animating == true) {
        console.log("cannot decrement")
    } else {
        active = slideImage[activeIndex];
        next = slideImage[activeIndex - 1];

        // set id's
        active.id = "top";
        next.id = "next";

        //TEXT DISAPPEAR
        //TEXT DISAPPEAR
        //TEXT DISAPPEAR
        slideText[activeIndex].classList.add("inactiveInitial");

        slideTextChilds = slideText[activeIndex].querySelectorAll("*");
        slideTextChilds.forEach(function (item, index) {
            slideTextChilds[index].classList.add("inactiveFinal");
        })


        //assign .animate class to animate the shifted clip path then hide active
        console.log("animating");
        active.classList.add("animateClipPath");

        //wait duration then return active image to and remove .animate class
        animating = true;
        window.setTimeout(function () {
            waitRemove("down");
        }, duration);
    }
})

//  WAIT    //  WAIT
//  WAIT    //  WAIT
//  WAIT    //  WAIT
//  WAIT    //  WAIT
function waitRemove(direction) {
    //remove top ID and animate class
    //console.log("timer up; returning active to stack");
    active.removeAttribute('id');
    active.classList.remove("animateClipPath");

    //decrement and reassign active images to shift the top and next images
    if (direction == "up") {
        console.log("increment activeIndex");
        activeIndex++;
    } else {
        console.log("decrement activeIndex");
        activeIndex--;
    }

    //  REMOVE inactiveInitial TO PREP FOR STAGGERED FADE IN
    slideText[activeIndex].classList.remove("inactiveInitial");
    //  TEXT STATE 2 - remove inactiveFinal from all children for staggered FADE IN
    //  TEXT STATE 2 - remove inactiveFinal from all children for staggered FADE IN
    slideTextChilds = slideText[activeIndex].querySelectorAll("*");
    slideTextChilds.forEach(function (item, index) {
        slideTextChilds[index].classList.remove("inactiveFinal");
    })



    console.log("activeIndex= " + activeIndex);
    animating = false;
}


//  CLICK FUNCTIONS
//  CLICK FUNCTIONS
//  CLICK FUNCTIONS
//  CLICK FUNCTIONS
function openPage(pathname) {
    active = slideImage[activeIndex];
    console.log("pathname: " + pathname);
    
    active.classList.add("transitionPage");

    setTimeout(function () {
        slideText[activeIndex].classList.add("inactiveInitial");
        document.getElementsByClassName("btn--flex")[0].classList.add("inactiveInitial");
    }, 200);

    setTimeout(function () {
        window.open(pathname, "_self");
    }, 3000);
}

function openPageBtn() {
    active = slideImage[activeIndex];
    var projectNum = (activeIndex + 1);
    var pathname = "project-" + projectNum + ".html";
    
    active.classList.add("transitionPage");

    setTimeout(function () {
        slideText[activeIndex].classList.add("inactiveInitial");
        document.getElementsByClassName("btn--flex")[0].classList.add("inactiveInitial");
    }, 200);

    setTimeout(function () {
        window.open(pathname, "_self");
    }, 3000);
}

function openProjectNav() {
    var menuItemContainer = document.getElementsByClassName("menuItemsContainer")[0];
    var navImgContainer = document.getElementsByClassName("menuImgContainer")[0];
    if (menuOpen == false) {
        console.log("opening menu");
        menuItemContainer.classList.add("menuItems-Toggled");
        //var menuItems = menuItemContainer.querySelectorAll("p");
        //menuItemContainer.querySelectorAll("p").forEach(element => {
        //    element.classList.add("menuItems-Toggled");
        //});
        menuOpen = true;
    } else {
        console.log("closing menu");
        menuItemContainer.classList.remove("menuItems-Toggled");
        navImgContainer.classList.remove("menuItems-Toggled");
        menuOpen = false;
    }
}

function mouseoverTemp(evt) {
    console.log('imgsrc=' + evt.target.imgSrc);
    mouseoverMenuImg(evt.target.imgSrc);
}
//add CSS class for hover animation and populate the proper img src for menu text hover
function mouseoverMenuImg(imgSrc) {
    var navImgContainer = document.getElementsByClassName("menuImgContainer")[0];
    var navImg = document.getElementById("navImg");
    //var galleryImg = document.getElementsByClassName("galleryImg");
    //on in
    console.log(`mouseOver ${imgSrc}`);
    navImg.src = imgSrc;
    navImgContainer.classList.add("menuItems-Toggled");
}
function mouseoutMenuImg() {
    var navImgContainer = document.getElementsByClassName("menuImgContainer")[0];

    //on out
    navImgContainer.classList.remove("menuItems-Toggled");
}



window.onload = function populateMenuTitles() {
    //populate the menu options on pageload by iterating foreach through the innerHTML of each h1 tag

    var projectTitles = document.querySelectorAll("h1");
    var menuItemContainer = document.getElementsByClassName("menuItemsContainer")[0];
    // var menuItems = document.querySelectorAll(".menuItemsContainer p");
    //var menuItemClone = menuItems[0].cloneNode(true);
    var galleryImg = document.getElementsByClassName("galleryImg");
    //var navImg = document.getElementById("navImg");
    var i = 1;

    projectTitles.forEach(title => {
        var menuItemNew = document.createElement("a");

        console.log(`i=${i}, project title ${title.innerHTML}`);
        console.log(`src ${galleryImg[i-1].src}`);
        console.log(`project-${i}.html`);

        menuItemNew.innerHTML = `${title.innerHTML}`;
        menuItemNew.href = `project-${i}.html`;
        menuItemNew.imgSrc = `${galleryImg[i - 1].src}`
        menuItemContainer.appendChild(menuItemNew);
 
        //menuItemNew.onmouseover = function () { mouseoverMenuImg('Graphics/project1_cover.png') };
        // menuItemNew.onmouseover = function () { console.log('i =' + i); mouseoverMenuImg(`${galleryImg[i-2].src}`) };
        menuItemNew.onmouseover = mouseoverTemp;
        menuItemNew.onmouseout = function () { mouseoutMenuImg() };
        //navImg.src = `${galleryImg[i - 1].src}`;

        
        i++;
    });
}
