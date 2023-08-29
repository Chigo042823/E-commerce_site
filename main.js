let widthCheck = function() {
    if (this.window.innerWidth <= 700) {
        this.document.querySelector('#nav1').style.display = "none";
        this.document.querySelector('#nav2').style.display = "none";
        this.document.querySelector('#nav4').style.display = "none";
        this.document.querySelector('#nav5').style.display = "none";
        this.document.querySelector('#nav6').style.display = "none";
        this.document.getElementById('hamburger').style.display = "inline";
    } else {
        this.document.querySelector('#nav1').style.display = "inline";
        this.document.querySelector('#nav2').style.display = "inline";
        this.document.querySelector('#nav4').style.display = "inline";
        this.document.querySelector('#nav5').style.display = "inline";
        this.document.querySelector('#nav6').style.display = "inline";
        this.document.getElementById('hamburger').style.display = "none";
    }
}

document.addEventListener('load', widthCheck());

window.addEventListener('resize', widthCheck);

const drop = document.querySelector('#drop');

document.querySelector('#hamburger').addEventListener('click', function() {
    if (drop.style.display == 'none') {
        drop.style.display = 'inline';
    } else {
        drop.style.display = 'none';
    }
})

let navGone = function() {
    document.getElementById("navList").style.transition = "transform 0.6s";
    document.getElementById("navList").style.transitionTimingFunction = "ease-out";
    document.getElementById("navList").style.transform = "translate(0, -10vh)";
    document.getElementById("hamburger").style.transition = "transform 0.6s";
    document.getElementById("hamburger").style.transitionTimingFunction = "ease-out";
    document.getElementById("hamburger").style.transform = "translate(0, 10vh)";
}

document.addEventListener('scroll', navGone)

document.querySelector('#hero').addEventListener('scroll', function() {
    navGone();
    drop.style.display = 'none'
});

let navBack = function() {
    document.getElementById("navList").style.transition = "transform 0.6s";
    document.getElementById("navList").style.transitionTimingFunction = "ease-out";
    document.getElementById("navList").style.transform = "translate(0, 0)";
    document.getElementById("hamburger").style.transition = "transform 0.6s";
    document.getElementById("hamburger").style.transitionTimingFunction = "ease-out";
    document.getElementById("hamburger").style.transform = "translate(0, 0)";
}

document.getElementById('navBar').addEventListener('mouseover', navBack)

let animateHero = function() {
    document.getElementById("heroTitle").style.transition = "transform 1.3s";
    document.getElementById("heroTitle").style.transitionTimingFunction = "ease-out";
    document.getElementById("heroTitle").style.transform = "translate(0, 0)";

    document.getElementById("heroTitleS").style.transition = "opacity 1.3s";
    document.getElementById("heroTitleS").style.transitionDelay = '1s';
    document.getElementById("heroTitleS").style.transitionTimingFunction = "ease-in";
    document.getElementById("heroTitleS").style.opacity = "100%";
}

document.querySelector('#banner').addEventListener('load', animateHero());