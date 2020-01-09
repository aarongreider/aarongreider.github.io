console.log('hello world');

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
//ScrollReveal().reveal('.card img', delayedSlideUp,);
//ScrollReveal().reveal('.colorShift', fadeInSimple);
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
var slideImage = document.getElementsByClassName("gallerySlide");
var slideText = document.getElementsByClassName("galleryText");
var slideTextChilds;
var activeIndex = 0;
var animating = false;

var active;
var next;

var duration = 1000;

console.log("activeIndex= " + activeIndex);


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
        active.classList.add("animate");

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
        active.classList.add("animate");

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
    active.classList.remove("animate");

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
    }, 800);

    setTimeout(function () {
        window.open(pathname, "_self");
    }, 2000);
}