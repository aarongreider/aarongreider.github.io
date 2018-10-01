console.log('hello world');
var overlay;

window.onload = function removeOverlay() {
    //remove the white overlay
    overlay = document.getElementById("overlay");
    
    setTimeout(function () {
        overlay.style.opacity = "0";
    }, 1000);
    setTimeout(function () {
        overlay.style.display = "none";
    }, 3000);
};

function transitionPage() {
    overlay.style.display = "block";
    setTimeout(function () {
        overlay.style.opacity = "1";
    }, 100);
    setTimeout(function () {
    }, 2000);

    window.open("index.html","_self");
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