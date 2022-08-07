(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TTM5PJ9');


iconAsides();

window.onload = function () {
    //if (window.innerWidth > 810) {
    imgFlex();
    //}


    //var elements = gsap.utils.toArray('main > *');
    var elements = gsap.utils.toArray('img, iframe, h1, h2, h3, aside, p');
    //elements.push(gsap.utils.toArray('p'))
    elements.forEach((element) => {

        gsap.to(element, {
            y: -10,
            opacity: 0,
            scrollTrigger: {
                trigger: element,
                start: '25% 40px',
                end: 'bottom 40px',
                scrub: true,
                /* markers: true, */
            }
        });
    })
}

/* window.addEventListener('resize', () => {
    imgFlex();
}) */
function iconAsides() {
    let asides = document.querySelectorAll("aside");
    let k = 0;
    for (let k = 0; k < asides.length; k++) {

        let ogHTML = asides[k].outerHTML;

        asides[k].outerHTML = `<aside><span></span>${ogHTML.slice(7)}`;
    }
}

function imgFlex() {
    // get all all imgs inside all flex-two tags
    // for each img, get aspect ratio // set its flex = img aspect ratio
    let imgs = document.querySelectorAll(".flex-two > img, iframe");
    for (let i = 0; i < imgs.length; i++) {
        let ogHTML = imgs[i].outerHTML;
        imgs[i].outerHTML = `<div class="jsAdjust" style="flex: ${imgs[i].naturalWidth / imgs[i].naturalHeight}">${ogHTML}</div>`;
    }

    /* let iframes = document.querySelectorAll("iframe");
    for (let k = 0; k < imgs.length; k++) {
        let ogHTML = iframes[k].outerHTML;
        iframes[k].outerHTML = `<div class="jsAdjust" style="flex: ${iframes[k].naturalWidth / iframes[k].naturalHeight}">${ogHTML}</div>`;
    } */
}